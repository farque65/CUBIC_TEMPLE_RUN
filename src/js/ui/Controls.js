export class Controls {
  constructor(game) {
    this.game = game;
    this.player = game.player;
    
    // Keyboard controls (for desktop testing)
    document.addEventListener('keydown', (event) => this.handleKeyInput(event));

    // Touch controls
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchThreshold = 50; // Minimum distance for a swipe to register

    document.addEventListener('touchstart', (event) => this.handleTouchStart(event));
    document.addEventListener('touchmove', (event) => this.handleTouchMove(event));
    document.addEventListener('touchend', (event) => this.handleTouchEnd(event));
  }

  handleKeyInput(event) {
    if (this.game.state === 'waiting') {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          this.game.start();
          break;
      }
    }

    if (this.game.state === 'running') {
      switch (event.key) {
        case 'ArrowLeft': this.player.moveLeft(); break;
        case 'ArrowRight': this.player.moveRight(); break;
        case 'ArrowUp': this.player.jump(); break;
        case 'ArrowDown': this.player.slide(); break;
      }
    }
  }

  handleTouchStart(event) {
    event.preventDefault(); // Prevent scrolling
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
  }

  handleTouchMove(event) {
    event.preventDefault(); // Prevent unwanted behavior during swipe
  }

  handleTouchEnd(event) {
    event.preventDefault();
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;

    // Determine swipe direction based on largest movement
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX < this.touchThreshold && absDeltaY < this.touchThreshold) {
      return; // Ignore small movements
    }

    if (this.game.state === 'waiting') {
      // Any swipe starts the game
      this.game.start();
    }

    if (this.game.state === 'running') {
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          this.player.moveRight();
        } else {
          this.player.moveLeft();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          this.player.slide();
        } else {
          this.player.jump();
        }
      }
    }
  }
}