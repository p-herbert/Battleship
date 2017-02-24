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

