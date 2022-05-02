// Connect Four
// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.


function whoIsWinner(piecesPositionList){
  
    // Lets get long-winded!
    
    // Board matrix
    let board = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];
    
    // Convert Letter to board index
    const convertMoveToIndex = {
      A: '0',
      B: '1',
      C: '2',
      D: '3',
      E: '4',
      F: '5',
      G: '6'
    }
    
    // Add a piece to the board
    const addPiece = move => {
      const [fullString, moveGroup, playerColor] = move.match(/^(.{1})(?:\_{1})(.+)$/i);
      const columnIndex = convertMoveToIndex[moveGroup];
      for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][columnIndex] === '') {
          board[i][columnIndex] = playerColor;
          break;
        }
      }
    }
    
    // Check if a player has won
    const checkWin = () => {
      
      // Ew, brute force method     
      // This needs to be fixed


      let winner = null;
      
      for (let i = 0; i < board.length; i++) {
        if (winner !== null) break;
        for (let ii = 0; ii < board[i].length; ii++) {
          if (board[i][ii] == '') continue;
          
          let winnerQuery = board[i][ii];
          
          // UP
          if (i >= 3) {         
            if (board[i][ii] === winnerQuery &&
               board[i-1][ii] === winnerQuery &&
               board[i-2][ii] === winnerQuery &&
               board[i-3][ii] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
          
          // DOWN
          if (i <= 2) {
            if (board[i][ii] === winnerQuery &&
               board[i+1][ii] === winnerQuery &&
               board[i+2][ii] === winnerQuery &&
               board[i+3][ii] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
          
          //RIGHT
          if (ii <= 3) {
            if (board[i][ii] === winnerQuery &&
               board[i][ii+1] === winnerQuery &&
               board[i][ii+2] === winnerQuery &&
               board[i][ii+3] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
          
          //LEFT
          if (ii >= 3) {
            if (board[i][ii] === winnerQuery &&
               board[i][ii-1] === winnerQuery &&
               board[i][ii-2] === winnerQuery &&
               board[i][ii-3] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
          
          // DIAGS - RIGHT
          if (ii <= 3 && i <= 2) {
            if (board[i][ii] === winnerQuery &&
               board[i+1][ii+1] === winnerQuery &&
               board[i+2][ii+2] === winnerQuery &&
               board[i+3][ii+3] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
          
          // DIAGS - LEFT
          if (ii >= 3 && i <= 2) {
            if (board[i][ii] === winnerQuery &&
               board[i+1][ii-1] === winnerQuery &&
               board[i+2][ii-2] === winnerQuery &&
               board[i+3][ii-3] === winnerQuery) { 
              winner = winnerQuery
              break;
            }
          }
        }
      }
      
      return winner
    }
    
    
    // For each move, add it to the board, check for a winner and return them
    for (let i = 0; i < piecesPositionList.length; i++) {
      addPiece(piecesPositionList[i]);
      if ((winner = checkWin()) !== null) return winner
    }
    
    return 'Draw';
}


module.exports = whoIsWinner;