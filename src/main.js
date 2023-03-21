import * as THREE from 'three';
import '../style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { LDrawLoader } from 'three/addons/loaders/LDrawLoader.js';
import { LDrawUtils } from 'three/addons/utils/LDrawUtils.js';

// tyre.ldr_Packed.mpd
// window setup
var windowSize = {
  'width': window.innerWidth,
  'height': window.innerHeight,
}

window.addEventListener("resize", () => {
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;

  camera.aspect = windowSize.width/windowSize.height;
  camera.updateProjectionMatrix();
  renderer.setSize(windowSize.width, windowSize.height);
});

// debugging
//TODO:remove this
const axesHelper = new THREE.AxesHelper(8);

// scene
const scene = new THREE.Scene();
scene.add(axesHelper);

// PHYSICS PART
const physicsWorld =  new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});

const groundBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Plane(), 
});
physicsWorld.addBody(groundBody);

groundBody.quaternion.setFromEuler(-Math.PI/2, 0, 0);

let fulcrumBodyDim = new CANNON.Vec3(20,30,200);

const fulcrumBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Box(fulcrumBodyDim), 
});
physicsWorld.addBody(fulcrumBody);

let planeOverFulcrumMaterialBodyDim =  new CANNON.Vec3(500,2,200);

const planeOverFulcrumBody = new CANNON.Body({
  shape: new CANNON.Box(planeOverFulcrumMaterialBodyDim), 
  mass: 5,
});
planeOverFulcrumBody.position.y=fulcrumBodyDim.y+10;

physicsWorld.addBody(planeOverFulcrumBody);

let chasisWidth = 200;
var vehicleChasisBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(chasisWidth, 20, 100)),
  mass: 1,
  position: new CANNON.Vec3(200, planeOverFulcrumBody.position.y+40, 0),
});

const vehicleBody = new CANNON.RigidVehicle({
  chassisBody: vehicleChasisBody,
});

function createWheel(wheelNum) {
  if(wheelNum < 0 || wheelNum > 3) return;

  const mass = 1
  let axisWidth = chasisWidth;
  const wheelShape = new CANNON.Sphere(20.5)
  const wheelMaterial = new CANNON.Material('wheel')
  const down = new CANNON.Vec3(0, -1, 0)
  const centerOfMassAdjust = new CANNON.Vec3(0, -1, 0)
  
  const wheelBody = new CANNON.Body({ mass, material: wheelMaterial })

  let axisZ = 1;
  if(wheelNum == 0 || wheelNum == 1) { //back wheels
    axisZ = axisZ*-1;
    axisWidth = axisWidth*-1;
  }

  let posX = 100;
  if(wheelNum == 0 || wheelNum == 3) { // left wheels
    posX = posX*-1;
  }

  wheelBody.addShape(wheelShape)
  vehicleBody.addWheel({
    body: wheelBody,
    position: new CANNON.Vec3(posX, 0, axisWidth / 2).vadd(centerOfMassAdjust),
    axis: new CANNON.Vec3(0, 0, axisZ),
    direction: down,
  })
}

for(let i=0; i<4; i++) {
  createWheel(i);
}

vehicleBody.addToWorld(physicsWorld);

let peoplePhysicsArray = [];
let singlePhysicsArray = [];
function createPeople(index, isSingle) {
  let posX = (Math.random()*-200)-100;
  let posZ = (Math.random()-5)*20;
  if(!isSingle) {
    if(index > 6) {
      posX= (Math.random()*300) + 400;
      posZ = (index)*20;
    }
  } else {
    posZ = ((Math.random())*50);
  }

  var person = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(4, 20, 4)),
    mass: 0.1,
    position: new CANNON.Vec3(posX, planeOverFulcrumBody.position.y+60, posZ),
  });
  physicsWorld.addBody(person);
  if(isSingle) {
    singlePhysicsArray[index] = person;
  } else {
    peoplePhysicsArray[index] = person;
  }
}

for(var i=0; i<17; i++) {
  createPeople(i, false);
}
for(var i=0; i<2; i++) {
  createPeople(i, true);
}

//Cannon Debugger
const cannonDebugger = new CannonDebugger(
  scene, physicsWorld
);


// THREE PART CONTD...

//camera
const camera = new THREE.PerspectiveCamera(45, windowSize.width/windowSize.height, 0.1, 3000);
camera.position.y = 200;
camera.position.z = 1000;
scene.add(camera);

//light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10);
scene.add(light);

//canvas
const canvas = document.querySelector('.webgl');

//controls
var controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//action
var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(windowSize.width, windowSize.height);

renderer.render(scene, camera);

var modelArray = [
  {
    type: "tyre",
    path: "models/tyre.ldr_Packed.mpd"
  },
  {
    type: "bulldozer",
    path: "models/bulldozerTest.ldr_Packed.mpd"
  },
  {
    type: "people",
    path: "models/char1.ldr_Packed.mpd"
  },
  {
    type: "singles",
    path: "models/hammer.ldr_Packed.mpd"
  },
  {
    type: "singles",
    path: "models/house.ldr_Packed.mpd"
  }
]

//loading
// Instantiate a loader
const loader = new LDrawLoader();

// Optionally set library parts path
await loader.setPartsLibraryPath('/models/ldraw/');

var peopleArray = [];
var singlesArray = [];
var bulldozerModel;
var wheelModelArray = [];

// Load a LDraw resource
var index = 0;
async function load() {
    var modelObject = modelArray[index];
    await loader.load(
      // resource URL
      modelObject.path, 
      // called when the resource is loaded
      async function ( group ) {
        let limit = 1;
        console.log(modelObject.type);
  
        if(modelObject.type == "tyre") {
          limit = 4;
        } else if(modelObject.type == "people") {
          limit = peoplePhysicsArray.length;
        }
  
        let tempModelArray = [];
        for(var i = 0; i<limit; i++) {
          tempModelArray[i] = group;
    
          console.log('LOADED');
        function convertMaterial( material ) {
      
          const newMaterial = new THREE.MeshBasicMaterial();
          newMaterial.color.copy( material.color );
          newMaterial.polygonOffset = material.polygonOffset;
          newMaterial.polygonOffsetUnits = material.polygonOffsetUnits;
          newMaterial.polygonOffsetFactor = material.polygonOffsetFactor;
          newMaterial.opacity = material.opacity;
          newMaterial.transparent = material.transparent;
          newMaterial.depthWrite = material.depthWrite;
          newMaterial.toneMapping = false;
          
          return newMaterial;
      
        }
      
        tempModelArray[i].traverse( c => {
          if ( c.isMesh ) {
            // c.geometry.translate(-20,10,0);
            // console.log(c);
            if ( Array.isArray( c.material ) ) {
      
              c.material = c.material.map(convertMaterial );
      
            } else {
      
              c.material = convertMaterial( c.material );
      
            }
          }
      
        } );
          tempModelArray[i] = await LDrawUtils.mergeObject( group );
          if(modelObject.type == "people") {
            tempModelArray[i].rotation.z = Math.PI;
          } else if(modelObject.type == "singles") {
            tempModelArray[i].rotation.z = Math.PI;
          }
          // vehicleBody.chassisBody = model;
          // physicsWorld.addBody(vehicleBody);
          scene.add(tempModelArray[i]);
        }
        if(modelObject.type == "tyre") {

          wheelModelArray = [...tempModelArray];
  
        } else if(modelObject.type == "bulldozer") {
  
          bulldozerModel = tempModelArray[0];//should have only one
          bulldozerModel.rotation.x = Math.PI;
          bulldozerModel.rotation.y = Math.PI;
        } else if(modelObject.type == "people") {
          console.log("people");
          peopleArray = [...tempModelArray];
        } else if(modelObject.type == "singles") {
          singlesArray.push(...tempModelArray);
          console.log(singlePhysicsArray);
        } else {
          console.log('Unknown model object type given' + modelObject.type);
        }
        index++;
        if(index<modelArray.length) load();
      },
      // called while loading is progressing
      function ( xhr ) {
    
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      },
      // called when loading has errors
      function ( error ) {
    
        console.log( 'An error happened' + error );
    
      }
    );
}

await load();

// THREE JS
const fulcrumMaterial = new THREE.MeshBasicMaterial({
  color: "#21130d",
});
const fulcrumGeometry = new THREE.BoxGeometry(fulcrumBodyDim.x*2, fulcrumBodyDim.y*2, fulcrumBodyDim.z*2);
var fulcrumMesh = new THREE.Mesh(fulcrumGeometry, fulcrumMaterial);

scene.add(fulcrumMesh);

const planeOverFulcrumMaterial = new THREE.MeshBasicMaterial({
  color: "#eab676",
});
const planeOverFulcrumGeometry = new THREE.BoxBufferGeometry(planeOverFulcrumMaterialBodyDim.x*2, planeOverFulcrumMaterialBodyDim.y*2, planeOverFulcrumMaterialBodyDim.z*2);

var planeOverFulcrumMesh = new THREE.Mesh(planeOverFulcrumGeometry, planeOverFulcrumMaterial);

scene.add(planeOverFulcrumMesh);
vehicleBody.setWheelForce(600, 3);
vehicleBody.setWheelForce(600, 2);
// vehicleBody.setWheelForce(4000, 1);
// vehicleBody.setWheelForce(4000, 0);

//loop function
const loop = () => {

  var i=0;
  wheelModelArray.forEach((wheel) => {
    if(wheel != null && wheel.position != null) {
      // vehicleBody.rotation
      // console.log(vehicleBody.wheelBodies[2]);
      // wheel.position.copy(vehicleBody.wheelBodies[i].position);
      // wheel.rotation.z+=0.1;
      // model.quaternion.copy(vehicleBody.wheelBodies[2].quaternion);
      // model.rotation.set(vehicleChasisBody.rotation.x + Math.PI / 2, vehicleChasisBody.rotation.y, vehicleChasisBody.rotation.z)
  
    }
    i++;
  });

  var i=0;
  peopleArray.forEach((person) => {
    if(person != null && person.position != null) {
      // vehicleBody.rotation
      // console.log(vehicleBody.wheelBodies[2]);
      person.position.copy(peoplePhysicsArray[i].position);
      // wheel.rotation.z+=0.1;
      // model.quaternion.copy(vehicleBody.wheelBodies[2].quaternion);
      // model.rotation.set(vehicleChasisBody.rotation.x + Math.PI / 2, vehicleChasisBody.rotation.y, vehicleChasisBody.rotation.z)
  
    }
    i++;
  });

  var i=0;
  singlesArray.forEach((singles) => {
    if(singles != null && singles.position != null) {
      // vehicleBody.rotation
      // console.log(vehicleBody.wheelBodies[2]);
      singles.position.copy(singlePhysicsArray[i].position);
      // wheel.rotation.z+=0.1;
      // model.quaternion.copy(vehicleBody.wheelBodies[2].quaternion);
      // model.rotation.set(vehicleChasisBody.rotation.x + Math.PI / 2, vehicleChasisBody.rotation.y, vehicleChasisBody.rotation.z)
  
    }
    i++;
  });
  // console.log(vehicleBody.wheelBodies[1]);
  if(bulldozerModel) {
    bulldozerModel.position.copy(vehicleChasisBody.position);
    bulldozerModel.position.y -=30;
  }
  
  planeOverFulcrumMesh.position.copy(planeOverFulcrumBody.position);
  planeOverFulcrumMesh.quaternion.copy(planeOverFulcrumBody.quaternion);

  // cannonDebugger.update();
  physicsWorld.fixedStep();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop();






// import * as THREE from 'three';

// 			import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// 			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 			import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// 			import { LDrawLoader } from 'three/addons/loaders/LDrawLoader.js';
// 			import { LDrawUtils } from 'three/addons/utils/LDrawUtils.js';

// 			let container, progressBarDiv;

// 			let camera, scene, renderer, controls, gui, guiData;

// 			let model;

// 			const ldrawPath = 'models/ldraw/officialLibrary/';

// 			const modelFileList = {
// 				'Car': 'models/tyre.ldr',
// 				'Lunar Vehicle': 'models/bulldozerTest.ldr_Packed.mpd'
// 			};

// 			init();
// 			animate();


// 			function init() {

// 				container = document.createElement( 'div' );
// 				document.body.appendChild( container );

// 				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
// 				camera.position.set( 150, 200, 250 );

// 				//

// 				renderer = new THREE.WebGLRenderer( { antialias: true } );
// 				renderer.setPixelRatio( window.devicePixelRatio );
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				renderer.outputEncoding = THREE.sRGBEncoding;
// 				renderer.toneMapping = THREE.ACESFilmicToneMapping;
// 				container.appendChild( renderer.domElement );

// 				// scene

// 				const pmremGenerator = new THREE.PMREMGenerator( renderer );

// 				scene = new THREE.Scene();
// 				scene.background = new THREE.Color( 0xdeebed );
// 				scene.environment = pmremGenerator.fromScene( new RoomEnvironment() ).texture;

// 				controls = new OrbitControls( camera, renderer.domElement );

// 				//

// 				guiData = {
// 					modelFileName: modelFileList[ 'Car' ],
// 					displayLines: true,
// 					conditionalLines: true,
// 					smoothNormals: true,
// 					buildingStep: 0,
// 					noBuildingSteps: 'No steps.',
// 					flatColors: false,
// 					mergeModel: false
// 				};

// 				window.addEventListener( 'resize', onWindowResize );

// 				progressBarDiv = document.createElement( 'div' );
// 				progressBarDiv.innerText = 'Loading...';
// 				progressBarDiv.style.fontSize = '3em';
// 				progressBarDiv.style.color = '#888';
// 				progressBarDiv.style.display = 'block';
// 				progressBarDiv.style.position = 'absolute';
// 				progressBarDiv.style.top = '50%';
// 				progressBarDiv.style.width = '100%';
// 				progressBarDiv.style.textAlign = 'center';


// 				// load materials and then the model

// 				reloadObject( true );

// 			}

// 			function updateObjectsVisibility() {

// 				model.traverse( c => {

// 					if ( c.isLineSegments ) {

// 						if ( c.isConditionalLine ) {

// 							c.visible = guiData.conditionalLines;

// 						} else {

// 							c.visible = guiData.displayLines;

// 						}

// 					} else if ( c.isGroup ) {

// 						// Hide objects with building step > gui setting
// 						c.visible = c.userData.buildingStep <= guiData.buildingStep;

// 					}

// 				} );

// 			}

// 			function reloadObject( resetCamera ) {

// 				if ( model ) {

// 					scene.remove( model );

// 				}

// 				model = null;

// 				updateProgressBar( 0 );
// 				showProgressBar();

// 				// only smooth when not rendering with flat colors to improve processing time
// 				const lDrawLoader = new LDrawLoader();
//         lDrawLoader.set
// 				lDrawLoader.smoothNormals = guiData.smoothNormals && ! guiData.flatColors;
// 				lDrawLoader.setPartsLibraryPath('models/ldraw/')
// 					.load( guiData.modelFileName, function ( group2 ) {

// 						if ( model ) {

// 							scene.remove( model );

// 						}

// 						model = group2;

// 						// demonstrate how to use convert to flat colors to better mimic the lego instructions look
// 						if ( guiData.flatColors ) {

// 							function convertMaterial( material ) {

// 								const newMaterial = new THREE.MeshBasicMaterial();
// 								newMaterial.color.copy( material.color );
// 								newMaterial.polygonOffset = material.polygonOffset;
// 								newMaterial.polygonOffsetUnits = material.polygonOffsetUnits;
// 								newMaterial.polygonOffsetFactor = material.polygonOffsetFactor;
// 								newMaterial.opacity = material.opacity;
// 								newMaterial.transparent = material.transparent;
// 								newMaterial.depthWrite = material.depthWrite;
// 								newMaterial.toneMapping = false;

// 								return newMaterial;

// 							}

// 							model.traverse( c => {

// 								if ( c.isMesh ) {

// 									if ( Array.isArray( c.material ) ) {

// 										c.material = c.material.map( convertMaterial );

// 									} else {

// 										c.material = convertMaterial( c.material );

// 									}

// 								}

// 							} );

// 						}

// 						// Merge model geometries by material
// 						if ( guiData.mergeModel ) model = LDrawUtils.mergeObject( model );

// 						// Convert from LDraw coordinates: rotate 180 degrees around OX
// 						model.rotation.x = Math.PI;

// 						scene.add( model );

// 						guiData.buildingStep = model.userData.numBuildingSteps - 1;

// 						updateObjectsVisibility();

// 						// Adjust camera and light

// 						const bbox = new THREE.Box3().setFromObject( model );
// 						const size = bbox.getSize( new THREE.Vector3() );
// 						const radius = Math.max( size.x, Math.max( size.y, size.z ) ) * 0.5;

// 						if ( resetCamera ) {

// 							controls.target0.copy( bbox.getCenter( new THREE.Vector3() ) );
// 							controls.position0.set( - 2.3, 1, 2 ).multiplyScalar( radius ).add( controls.target0 );
// 							controls.reset();

// 						}

// 						createGUI();

// 						hideProgressBar();

// 					}, onProgress, onError );

// 			}

// 			function onWindowResize() {

// 				camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();

// 				renderer.setSize( window.innerWidth, window.innerHeight );

// 			}

// 			function createGUI() {

// 				if ( gui ) {

// 					gui.destroy();

// 				}

// 				gui = new GUI();

// 				gui.add( guiData, 'modelFileName', modelFileList ).name( 'Model' ).onFinishChange( function () {

// 					reloadObject( true );

// 				} );

// 				gui.add( guiData, 'flatColors' ).name( 'Flat Colors' ).onChange( function () {

// 					reloadObject( false );

// 				} );

// 				gui.add( guiData, 'mergeModel' ).name( 'Merge model' ).onChange( function () {

// 					reloadObject( false );

// 				} );

// 				if ( model.userData.numBuildingSteps > 1 ) {

// 					gui.add( guiData, 'buildingStep', 0, model.userData.numBuildingSteps - 1 ).step( 1 ).name( 'Building step' ).onChange( updateObjectsVisibility );

// 				} else {

// 					gui.add( guiData, 'noBuildingSteps' ).name( 'Building step' ).onChange( updateObjectsVisibility );

// 				}

// 				gui.add( guiData, 'smoothNormals' ).name( 'Smooth Normals' ).onChange( function changeNormals() {

// 					reloadObject( false );

// 				} );

// 				gui.add( guiData, 'displayLines' ).name( 'Display Lines' ).onChange( updateObjectsVisibility );
// 				gui.add( guiData, 'conditionalLines' ).name( 'Conditional Lines' ).onChange( updateObjectsVisibility );

// 			}

// 			//

// 			function animate() {

// 				requestAnimationFrame( animate );
// 				render();

// 			}

// 			function render() {

// 				renderer.render( scene, camera );

// 			}

// 			function onProgress( xhr ) {

// 				if ( xhr.lengthComputable ) {

// 					updateProgressBar( xhr.loaded / xhr.total );

// 					console.log( Math.round( xhr.loaded / xhr.total * 100, 2 ) + '% downloaded' );

// 				}

// 			}

// 			function onError( error ) {

// 				const message = 'Error loading model';
// 				progressBarDiv.innerText = message;
// 				console.log( message );
// 				console.error( error );

// 			}

// 			function showProgressBar() {

// 				document.body.appendChild( progressBarDiv );

// 			}

// 			function hideProgressBar() {

// 				document.body.removeChild( progressBarDiv );

// 			}

// 			function updateProgressBar( fraction ) {

// 				progressBarDiv.innerText = 'Loading... ' + Math.round( fraction * 100, 2 ) + '%';

// 			}