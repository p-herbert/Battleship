const Ship = require('./ship');
const Board = require('./board');

class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.primary = new Board();
    this.tracking = new Board();
  }

  each(cb) {
    for (let i = 0; i < this.ships.length; i++) {
      cb(this.ships[i]);
    }
  }

  addShip(ship, coords) {
    ship.setLocation(coords);
    this.primary.fill('S', coords);
    this.ships.push(ship);
  }
}

