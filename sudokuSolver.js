function solveSudoku(board) {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) return true; // puzzle is solved
  
    const [row, col] = emptyCell;
  
    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
  
        if (solveSudoku(board)) {
          return true;
        }
  
        board[row][col] = 0; // backtrack
      }
    }
  
    return false; // no solution exists
  }
  
  function findEmptyCell(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }
  
  function isValid(board, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }
  
    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }
  
    // Check 3x3 box
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) return false;
      }
    }
  
    return true;
  }
  
  module.exports = {
    solve: function(puzzle) {
      solveSudoku(puzzle);
      return puzzle;
    }
  };