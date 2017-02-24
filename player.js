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

  allDestoyed() {
    let allDestroyed = true;

    this.each((ship) => {
      if (!ship.isDestroyed()) {
        allDestroyed = false;
      }
    });

    return allDestroyed;
  }

  isHit(coord) {
    if (this.primary.get(coord) === 'S') {
      this.each((ship) => {
        if (ship.getLocation().indexOf(coord) > -1) {
          ship.hit();

          if (ship.isDestroyed()) {
            console.log(`You sank my ${ship.name}!`);
          }
        }
      });

      return true;
    }

    return false;
  }

  mark(symbol, coord) {
    this.tracking.set(symbol, coord);
  }
}

module.exports = Player;

