import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class PhysicsMesh {

   constructor(position, geometry, physicsShape, color, type) {
      this.position = position;
      
      var material = new THREE.MeshBasicMaterial({color: color});
      var geometry = this.geometry;
      this.mesh = new THREE.Mesh(geometry, material);

      this.body = new CANNON.Body({
         shape: physicsShape, 
         mass: 5,
         type: type,
       });
      if(position) this.body.position = position;       
   }
}