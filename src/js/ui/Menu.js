export class Menu {
  constructor(game) {
    this.game = game;

    // Only game over screen; no start screen
    this.gameOver = document.createElement('div');
    this.gameOver.id = 'game-over';
    this.gameOver.classList.add('hidden');
    this.gameOver.innerHTML = `
      <h1>Game Over</h1>
      <div id="final-score"></div>
      <button id="replay">Replay</button>
    `;
    document.getElementById('game-container').appendChild(this.gameOver);
    this.gameOver.querySelector('#replay').addEventListener('click', () => this.game.reset());
  }

  showGameOver(score) {
    this.gameOver.querySelector('#final-score').textContent = `Score: ${score}`;
    this.gameOver.classList.remove('hidden');
  }

  hideGameOver() {
    this.gameOver.classList.add('hidden');
  }
}