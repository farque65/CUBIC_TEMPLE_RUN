import * as THREE from 'three';

export function setupThree() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('game-container').appendChild(renderer.domElement);

  camera.position.set(0, 5, 5);
  camera.lookAt(0, 0, 0);

  return { scene, camera, renderer };
}