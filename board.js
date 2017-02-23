class Board {
  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      this.board.push(['', '', '', '', '', '', '', '', '', '']);
    }
  }

  static xy(coord) {
    const xy = coord.split('');

    const row = +xy[1];
    const col = xy[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);

    return { x: row, y: col };
  }

  get(coord) {
    coord = Board.xy(coord);

    return this.board[coord.x][coord.y];
  }

  set(symbol, coord) {
    coord = Board.xy(coord);

    this.board[coord.x][coord.y] = symbol;
  }
}

