import * as THREE from 'three';
import { AABB } from '../utils/AABB.js';

export class Path {
  constructor(scene) {
    this.scene = scene;
    this.segments = [];
    this.pool = [];
  }

  generateInitial() {
    for (let i = 0; i < 20; i++) {
      this.spawnSegment(-i * 3);
    }
  }

  spawnSegment(z) {
    let segment;
    if (this.pool.length > 0) {
      segment = this.pool.pop();
      segment.mesh.position.set(0, 0, z);
    } else {
      segment = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(3, 0.2, 3),
        new THREE.MeshBasicMaterial({ color: 0x666666 })
      );
      const moss = new THREE.Mesh(
        new THREE.BoxGeometry(3, 0.2, 3),
        new THREE.MeshBasicMaterial({ color: 0x00CC00 })
      );
      moss.position.y = 0.2;
      segment.add(base, moss);
      segment.position.set(0, 0, z);
      this.scene.add(segment);
    }
    this.segments.push({ mesh: segment, aabb: new AABB(segment.position, 3) });
  }

  update(speed, playerZ) {
    this.segments.forEach(segment => segment.mesh.position.z += speed);
    this.segments = this.segments.filter(segment => {
      if (segment.mesh.position.z > 10) {
        this.scene.remove(segment.mesh);
        this.pool.push(segment);
        return false;
      }
      return true;
    });

    if (playerZ < this.segments[this.segments.length - 1].mesh.position.z - 20) {
      this.spawnSegment(this.segments[this.segments.length - 1].mesh.position.z - 3);
    }
  }

  reset() {
    this.segments.forEach(segment => this.scene.remove(segment.mesh));
    this.pool.push(...this.segments);
    this.segments = [];
    this.generateInitial();
  }
}