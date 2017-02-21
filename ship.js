class Ship {
  constructor(type, coords) {
    this.type = type;
    this.hits = coords.length;
    this.coords = coords;
  }

  isDestroyed() {
    return this.hits === 0;
  }
}

