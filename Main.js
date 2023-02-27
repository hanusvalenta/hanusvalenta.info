import './style.css';
import * as THREE from 'three';

// Set constants
const Scene = new THREE.Scene();
const Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const Renderer = new THREE.WebGLRenderer();

// set render size
Renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( Renderer.domElement );

// predefine Cube
const BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const BoxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const Cube = new THREE.Mesh( BoxGeometry, BoxMaterial );

// add cube to scene
Scene.add( Cube );

// move camera a bit
Camera.position.z = 5;

// animate loop
function animate() {
	requestAnimationFrame( animate );
	Renderer.render( Scene, Camera );

  // rotate box a bit
  Cube.rotation.x += 0.01;
  Cube.rotation.y += 0.01;
}
animate();