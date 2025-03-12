import { Controls } from '../ui/Controls.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { Collectibles } from './Collectibles.js';
import { Collision } from './Collision.js';
import { Obstacles } from './Obstacles.js';
import { Path } from './Path.js';
import { Player } from './Player.js';

export class Game {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.state = 'waiting'; // Initial state: waiting for arrow key
    this.speed = 0.1;
    this.distance = 0;
    this.score = 0;
    this.coins = 0;

    this.player = new Player(scene);
    this.path = new Path(scene);
    this.obstacles = new Obstacles(scene);
    this.collectibles = new Collectibles(scene);
    this.collision = new Collision(this.player, this.path, this.obstacles, this.collectibles);
    this.hud = new HUD(this);
    this.menu = new Menu(this);
    this.controls = new Controls(this);

    // Initialize static scene, HUD hidden until running
    this.path.generateInitial();
    this.obstacles.spawn(-10);
    this.collectibles.spawnCoin(-5);
  }

  start() {
    this.state = 'running';
    this.hud.show();
  }

  update() {
    if (this.state === 'waiting' || this.state === 'paused') return; // No movement until arrow key pressed

    if (this.state === 'running') {
      this.distance += this.speed;
      this.score = Math.floor(this.distance * 10);
      this.speed += 0.0001;

      this.player.update();
      this.path.update(this.speed, this.player.mesh.position.z);
      this.obstacles.update(this.speed);
      this.collectibles.update(this.speed);

      const collisionResult = this.collision.check();
      if (collisionResult === 'gameOver') {
        this.state = 'gameOver';
        this.menu.showGameOver(this.score);
        this.hud.hide();
      } else if (collisionResult === 'coin') {
        this.coins++;
      }

      this.hud.update(this.score, this.coins);
      this.camera.position.z = this.player.mesh.position.z + 5;
    }
  }

  togglePause() {
    if (this.state === 'running') {
      this.state = 'paused';
    } else if (this.state === 'paused') {
      this.state = 'running';
    }
    this.hud.updatePauseButton(this.state);
  }

  reset() {
    this.state = 'waiting'; // Reset to waiting state
    this.speed = 0.1;
    this.distance = 0;
    this.score = 0;
    this.coins = 0;
    this.player.reset();
    this.path.reset();
    this.obstacles.reset();
    this.collectibles.reset();
    this.hud.hide();
    this.menu.hideGameOver();
    // Re-initialize static scene
    this.path.generateInitial();
    this.obstacles.spawn(-10);
    this.collectibles.spawnCoin(-5);
  }
}