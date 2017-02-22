class Ship {
  constructor(type, coords) {
    this.type = type;
    this.hits = 0;
    this.coords = coords;
  }

  isDestroyed() {
    return this.hits === this.coords.length;
  }
}

