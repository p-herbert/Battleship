const Ship = require('./ship');
const Board = require('./board');

class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.primary = new Board();
    this.tracking = new Board();
  }
}
