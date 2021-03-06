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

  allDestroyed() {
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
          console.log('HIT!');

          ship.hit();

          if (ship.isDestroyed()) {
            console.log(`You sank my ${ship.type}!`);
          }
        }
      });

      return true;
    }

    console.log('MISS!');

    return false;
  }

  mark(symbol, coord) {
    this.tracking.set(symbol, coord);
  }
}

module.exports = Player;

