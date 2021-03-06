class Ship {
  constructor(type, size) {
    this.type = type;
    this.maxSize = size;
    this.hits = 0;
    this.coords = null;
  }

  size() {
    return this.maxSize;
  }

  isDestroyed() {
    return this.hits === this.size();
  }

  hit() {
    if (!this.isDestroyed()) {
      this.hits += 1;
    }
  }

  getLocation() {
    return this.coords;
  }

  setLocation(coords) {
    this.coords = coords;
  }

  willFit(coords) {
    return coords.length === this.size();
  }

  print() {
    const size = this.size();

    function tag(string, type, hits) {
      const places = [];

      for (let i = 0; i < size; i++) {
        if (hits > 0) {
          places.push('X');
          hits -= 1;
        } else {
          places.push('_');
        }
      }

      return type + string.join('') + places.join(' ');
    }

    console.log(tag`${this.type}: ${this.hits}`);
  }
}

module.exports = Ship;

