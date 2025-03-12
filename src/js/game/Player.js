import * as THREE from 'three';
import { AABB } from '../utils/AABB.js';

export class Player {
  constructor(scene) {
    this.mesh = new THREE.Group();
    this.aabb = null;
    this.velocityY = 0;
    this.isJumping = false;
    this.isSliding = false;

    // Smaller cubic character: 1x2x1 body
    const bodyGeo = new THREE.BoxGeometry(1, 2, 1);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0xFF3333 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1;
    this.mesh.add(body);

    // Legs: 0.5x0.5x0.5 cubes
    const legMat = new THREE.MeshBasicMaterial({ color: 0xCC0000 });
    this.leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), legMat);
    this.leftLeg.position.set(-0.25, 0.25, 0);
    this.rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), legMat);
    this.rightLeg.position.set(0.25, 0.25, 0);
    this.mesh.add(this.leftLeg, this.rightLeg);

    // Feet: 0.5x0.25x0.5 cubes
    const footMat = new THREE.MeshBasicMaterial({ color: 0xCC0000 });
    this.leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.5), footMat);
    this.leftFoot.position.set(-0.25, 0.125, 0);
    this.rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.5), footMat);
    this.rightFoot.position.set(0.25, 0.125, 0);
    this.mesh.add(this.leftFoot, this.rightFoot);

    // Arms: Smaller 0.5x0.5x0.5 cubes
    const armMat = new THREE.MeshBasicMaterial({ color: 0xCC0000 });
    this.leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), armMat);
    this.leftArm.position.set(-0.75, 1.5, 0);
    this.rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), armMat);
    this.rightArm.position.set(0.75, 1.5, 0);
    this.mesh.add(this.leftArm, this.rightArm);

    // Head: Smaller 0.5x0.5x0.5 cube with eyes
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), bodyMat);
    head.position.y = 2.25;
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
    const eye1 = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125), eyeMat);
    eye1.position.set(-0.125, 2.25, 0.25);
    const eye2 = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125), eyeMat);
    eye2.position.set(0.125, 2.25, 0.25);
    this.mesh.add(head, eye1, eye2);

    this.mesh.position.y = 0.375; // Base height adjusted for feet
    this.aabb = new AABB(this.mesh.position, 1);
    scene.add(this.mesh);
  }

  update() {
    if (this.isJumping) {
      this.mesh.position.y += this.velocityY;
      this.velocityY -= 0.01; // Gravity
      if (this.mesh.position.y <= 0.375) {
        this.mesh.position.y = 0.375;
        this.isJumping = false;
        this.velocityY = 0; // Reset velocity to prevent accumulation
      }
    } else if (this.isSliding) {
      this.mesh.position.y = 0; // Slide lowers to ground
    } else {
      this.mesh.position.y = 0.375; // Ensure grounded when not jumping or sliding
    }

    this.updateAABB();

    // Running animation for arms and legs
    const time = Date.now() * 0.01;
    this.leftArm.rotation.z = Math.sin(time) * 0.5;
    this.rightArm.rotation.z = -Math.sin(time) * 0.5;
    this.leftLeg.rotation.z = Math.sin(time) * 0.5;
    this.rightLeg.rotation.z = -Math.sin(time) * 0.5;
    this.leftFoot.rotation.z = Math.sin(time) * 0.5;
    this.rightFoot.rotation.z = -Math.sin(time) * 0.5;
  }

  updateAABB() {
    this.aabb = new AABB(this.mesh.position, 1);
  }

  jump() {
    if (!this.isJumping && !this.isSliding) { // Prevent jumping while sliding
      this.velocityY = 0.2;
      this.isJumping = true;
      this.isSliding = false;
    }
  }

  slide() {
    if (!this.isJumping) {
      this.isSliding = true;
      setTimeout(() => {
        this.isSliding = false;
        if (!this.isJumping) this.mesh.position.y = 0.375; // Ensure return to base height
      }, 300);
    }
  }

  moveLeft() { this.mesh.position.x = Math.max(-1, this.mesh.position.x - 1); }
  moveRight() { this.mesh.position.x = Math.min(1, this.mesh.position.x + 1); }

  reset() {
    this.mesh.position.set(0, 0.375, 0);
    this.velocityY = 0;
    this.isJumping = false;
    this.isSliding = false;
  }
}