class Ship {
  constructor(type, coords) {
    this.type = type;
    this.hits = 0;
    this.coords = coords;
  }

  size() {
    return this.coords.length;
  }

  isDestroyed() {
    return this.hits === this.size();
  }

  hit() {
    if (!this.isDestroyed()) {
      this.hits += 1;
    }
  }

  location() {
    return this.coords;
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

