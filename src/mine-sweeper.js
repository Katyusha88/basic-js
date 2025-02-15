const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mas = ([i, j]) => [
    [i - 1, j -1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  let hinMatrix = matrix.map((r) => r.map((_) => 0));

  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j]) {
        let myA = mas([i, j]);
        for (let k = 0; k < 8; k ++) {
          if (
            myA[k][0] >= 0 &&
            myA[k][1] >= 0 &&
            myA[k][0] < matrix.length &&
            myA[k][1] < matrix[i].length
          ) {
            hinMatrix[myA[k][0]][myA[k][1]] ++;
          }
        }
      }
    }
  }
return hinMatrix;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
