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
}

