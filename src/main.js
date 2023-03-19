import * as THREE from 'three';
import '../style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { LDrawLoader } from 'three/addons/loaders/LDrawLoader.js';
import { LDrawUtils } from 'three/addons/utils/LDrawUtils.js';

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

const sphereBody = new CANNON.Body({
  shape: new CANNON.Sphere(1),
  mass: 5
})

sphereBody.position.y=16;
sphereBody.position.x=3;

physicsWorld.addBody(sphereBody);

const fulcrumBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Box(new CANNON.Vec3(1,2,1)), 
});
physicsWorld.addBody(fulcrumBody);

const planeOverFulcrumBody = new CANNON.Body({
  shape: new CANNON.Box(new CANNON.Vec3(5,1,1)), 
  mass: 5,
});
planeOverFulcrumBody.position.y=12;

physicsWorld.addBody(planeOverFulcrumBody);

//Cannon Debugger
const cannonDebugger = new CannonDebugger(
  scene, physicsWorld
);


// THREE PART CONTD...
//sphere created
const sphereGeometry = new THREE.SphereGeometry(3, 50, 50);
const sphereMaterial = new THREE.MeshNormalMaterial({
  color: '#00ff83'
});
var mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(mesh);


//camera
const camera = new THREE.PerspectiveCamera(45, windowSize.width/windowSize.height, 0.1, 500);
camera.position.z = 300;
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

//loading
// Instantiate a loader
const loader = new LDrawLoader();

// Optionally set library parts path
await loader.setPartsLibraryPath('/models/ldraw/');

var model;

// Load a LDraw resource
loader.load(
	// resource URL
	'models/bulldozerTest.ldr_Packed.mpd', 
	// called when the resource is loaded
	function ( group ) {

    model = group;
    // group.scale = new THREE.Vector3(1,1,1);
    console.log(model);
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

  model.traverse( c => {

    if ( c.isMesh ) {

      if ( Array.isArray( c.material ) ) {

        c.material = c.material.map( convertMaterial );

      } else {

        c.material = convertMaterial( c.material );

      }

    }

  } );
  model = LDrawUtils.mergeObject( group );

  model.rotation.x = Math.PI;

		scene.add( model ); 

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

//loop function
const loop = () => {
  if(model != null) {
    model.position.x++;
  }

  mesh.position.copy(sphereBody.position);
  cannonDebugger.update();
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