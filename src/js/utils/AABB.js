export class AABB {
    constructor(position, size) {
      this.min = {
        x: position.x - size / 2,
        y: position.y - size / 2,
        z: position.z - size / 2
      };
      this.max = {
        x: position.x + size / 2,
        y: position.y + size / 2,
        z: position.z + size / 2
      };
    }
  
    intersects(other) {
      return (
        this.min.x <= other.max.x &&
        this.max.x >= other.min.x &&
        this.min.y <= other.max.y &&
        this.max.y >= other.min.y &&
        this.min.z <= other.max.z &&
        this.max.z >= other.min.z
      );
    }
  }