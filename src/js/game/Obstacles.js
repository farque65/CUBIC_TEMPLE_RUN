import * as THREE from 'three';
import { AABB } from '../utils/AABB.js';

export class Obstacles {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = [];
    this.pool = [];
  }

  spawn(z) {
    let obstacle;
    if (this.pool.length > 0) {
      obstacle = this.pool.pop();
      obstacle.mesh.position.set(0, 0.5, z);
    } else {
      obstacle = new THREE.Group();
      const mat = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
      // Smaller obstacle: single 1x1x1 cube
      const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
      cube.position.x = 0; // Centered
      obstacle.add(cube);
      obstacle.position.set(0, 0.5, z);
      this.scene.add(obstacle);
    }
    this.obstacles.push({ mesh: obstacle, aabb: new AABB(obstacle.position, 1) }); // Updated AABB size to 1
  }

  update(speed) {
    this.obstacles.forEach(obstacle => obstacle.mesh.position.z += speed);
    this.obstacles = this.obstacles.filter(obstacle => {
      if (obstacle.mesh.position.z > 10) {
        this.scene.remove(obstacle.mesh);
        this.pool.push(obstacle);
        return false;
      }
      return true;
    });

    if (Math.random() < 0.01) {
      this.spawn(this.obstacles.length ? this.obstacles[this.obstacles.length - 1].mesh.position.z - 10 : -10);
    }
  }

  reset() {
    this.obstacles.forEach(obstacle => this.scene.remove(obstacle.mesh));
    this.pool.push(...this.obstacles);
    this.obstacles = [];
    this.spawn(-10);
  }
}