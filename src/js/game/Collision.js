
export class Collision {
  constructor(player, path, obstacles, collectibles) {
    this.player = player;
    this.path = path;
    this.obstacles = obstacles;
    this.collectibles = collectibles;
  }

  check() {
    this.player.updateAABB();

    // Obstacles
    for (const obstacle of this.obstacles.obstacles) {
      if (this.player.aabb.intersects(obstacle.aabb) && !this.player.isSliding) {
        return 'gameOver';
      }
    }

    // Coins
    for (let i = this.collectibles.coins.length - 1; i >= 0; i--) {
      const coin = this.collectibles.coins[i];
      if (this.player.aabb.intersects(coin.aabb)) {
        this.collectibles.coins.splice(i, 1);
        this.scene.remove(coin.mesh);
        this.collectibles.pool.push(coin);
        return 'coin';
      }
    }

    // Path
    let onPath = false;
    for (const segment of this.path.segments) {
      if (this.player.aabb.intersects(segment.aabb) && this.player.mesh.position.y <= 0.5) {
        onPath = true;
        break;
      }
    }
    if (!onPath && !this.player.isJumping) {
      return 'gameOver';
    }

    return 'running';
  }
}