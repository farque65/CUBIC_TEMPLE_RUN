import * as THREE from 'three';
import { AABB } from '../utils/AABB.js';

export class Collectibles {
  constructor(scene) {
    this.scene = scene;
    this.coins = [];
    this.pool = [];
  }

  spawnCoin(z) {
    let coin;
    if (this.pool.length > 0) {
      coin = this.pool.pop();
      coin.mesh.position.set(Math.random() * 2 - 1, 0.5, z);
    } else {
      coin = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.MeshBasicMaterial({ color: 0xFFFF00 })
      );
      coin.position.set(Math.random() * 2 - 1, 0.5, z);
      this.scene.add(coin);
    }
    this.coins.push({ mesh: coin, aabb: new AABB(coin.position, 0.5) });
  }

  update(speed) {
    this.coins.forEach(coin => {
      coin.mesh.position.z += speed;
      coin.mesh.rotation.y += 0.05; // Spin effect
    });
    this.coins = this.coins.filter(coin => {
      if (coin.mesh.position.z > 10) {
        this.scene.remove(coin.mesh);
        this.pool.push(coin);
        return false;
      }
      return true;
    });

    if (Math.random() < 0.02) {
      this.spawnCoin(this.coins.length ? this.coins[this.coins.length - 1].mesh.position.z - 5 : -5);
    }
  }

  reset() {
    this.coins.forEach(coin => this.scene.remove(coin.mesh));
    this.pool.push(...this.coins);
    this.coins = [];
    this.spawnCoin(-5);
  }
}