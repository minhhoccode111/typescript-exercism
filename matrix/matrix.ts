export class Matrix {
  matrixRow: number[][];
  matrixCol: number[][];
  constructor(str: string) {
    // '1 2 3\n4 5 6\n7 8 9\n8 7 6'

    /*
  [
  [1 2 3],
  [4 5 6],
  [7 8 9],
  [8 7 6],
  ]

  [
  [1 4 7 8]
  [2 5 8 7]
  [3 6 9 6]
  ]
    */

    const arrRow = str
      .split("\n")
      .map((row) => row.split(" ").map((item) => Number(item)));
    this.matrixRow = arrRow;

    const arrCol: number[][] = [];
    for (let j = 0, lenJ = arrRow[0].length; j < lenJ; j++) {
      const col: number[] = [];
      for (let i = 0, lenI = arrRow.length; i < lenI; i++) {
        const item = arrRow[i][j];
        col.push(item);
      }
      arrCol.push(col);
    }
    this.matrixCol = arrCol;
  }

  get rows(): number[][] {
    return this.matrixRow;
  }

  get columns(): number[][] {
    return this.matrixCol;
  }
}
