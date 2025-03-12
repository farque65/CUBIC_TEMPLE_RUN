export class HUD {
  constructor(game) {
    this.game = game;
    this.element = document.createElement('div');
    this.element.id = 'hud';
    this.element.classList.add('hidden'); // Hidden until game starts
    this.element.innerHTML = `
      <div id="score">Score: 0</div>
      <div id="coins">Coins: 0</div>
      <button id="pause" style="position: absolute; top: 10px; right: 10px;">Pause</button>
    `;
    document.getElementById('game-container').appendChild(this.element);
    
    this.element.querySelector('#pause').addEventListener('click', () => this.game.togglePause());
  }

  show() { this.element.classList.remove('hidden'); }
  hide() { this.element.classList.add('hidden'); }

  update(score, coins) {
    this.element.querySelector('#score').textContent = `Score: ${score}`;
    this.element.querySelector('#coins').textContent = `Coins: ${coins}`;
  }

  updatePauseButton(state) {
    this.element.querySelector('#pause').textContent = state === 'running' ? 'Pause' : 'Resume';
  }
}