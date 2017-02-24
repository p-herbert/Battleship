const prompt = require('prompt');
const Player = require('./player');
const Board = require('./board');

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

