import { Game } from './game/Game.js';
import { setupThree } from './utils/ThreeSetup.js';

const { scene, camera, renderer } = setupThree();
const game = new Game(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  game.update();
  renderer.render(scene, camera);
}

animate();