const prompt = require('prompt');
const Player = require('./player');
const Board = require('./board');
const Ship = require('./ship');

const shipSize = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2 };

// Convert User Input
function convert(input) {
  let start = input.split(' ')[0];
  let end = input.split(' ')[1];
  let coords = null;

  // Swap
  let temp;

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (Board.sameRow(start, end)) {
    coords = Board.rowCoords(start.charAt(1), start.charAt(0), end.charAt(0));
  } else if (Board.sameCol(start, end)) {
    coords = Board.colCoords(start.charAt(0), +start.charAt(1), +end.charAt(1));
  }

  return coords;
}

class BattleShip {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;
  }

  static setShip(player, ship, cb) {
    player.primary.print();

    function valid(input) {
      const coords = convert(input);

      return coords !== null && ship.willFit(coords) && player.primary.allEmpty(coords);
    }

    prompt.get({
      name: 'coords',
      description: `Place ${ship.type} (${ship.size()} spaces) on board (Col[A-J]Row[0-9] Col[A-J]Row[0-9])`,
      type: 'string',
      required: true,
      pattern: /[A-J]\d\s[A-J]\d/,
      message: 'Invalid input or ship does not fit or space is already taken!',
      before: input => convert(input),
      conform: input => valid(input) },
      (err, result) => { player.addShip(ship, result.coords); cb(); }
    );
  }

  getPlayerOne() {
    return this.playerOne;
  }

  setPlayerOne(name) {
    this.playerOne = new Player(name);
  }

  getPlayerTwo() {
    return this.playerTwo;
  }

  setPlayerTwo(name) {
    this.playerTwo = new Player(name);
  }
}

