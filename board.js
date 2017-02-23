class Board {
  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      this.board.push([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    }
  }

  static xy(coord) {
    const xy = coord.split('');

    const row = +xy[1];
    const col = xy[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

    return { x: row, y: col };
  }

  static rowCoords(row, start, end) {
    const coords = [];

    start = start.toUpperCase().charCodeAt(0);
    end = end.toUpperCase().charCodeAt(0);

    for (let col = start; col <= end; col++) {
      coords.push(`${String.fromCharCode(col)}${row}`);
    }

    return coords;
  }

  static colCoords(col, start, end) {
    const coords = [];

    for (let row = start; row <= end; row++) {
      coords.push(`${col}${row}`);
    }

    return coords;
  }

  get(coord) {
    coord = Board.xy(coord);

    return this.board[coord.x][coord.y];
  }

  set(symbol, coord) {
    coord = Board.xy(coord);

    this.board[coord.x][coord.y] = symbol;
  }

  isEmpty(coord) {
    return this.get(coord).trim().length === 0;
  }

  print() {
    const lineBreak = '---------------------------------------------';
    const header = '|   | A | B | C | D | E | F | G | H | I | J |';

    function tag(string, i, row) {
      return `| ${i} | ${row.join(' | ')} |\n${lineBreak}`;
    }

    console.log(`${lineBreak}\n${header}\n${lineBreak}`);

    this.board.forEach((row, i) => console.log(tag`${i}${row}`));
  }

  fill(symbol, coords) {
    coords.forEach(coord => this.set(symbol, coord));
  }
}

