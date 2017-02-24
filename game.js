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

