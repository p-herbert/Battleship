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
}

