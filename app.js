const header = document.createElement('p');
header.textContent = 'Tic Tac Toe!!!';
header.style = 'font-weight:bold; text-align:center; font-size:1.8rem';


document.body.appendChild(header);



// Tic Tac Toe Game

// Game Board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
// Player Turn
let currentPlayer = 'X';

// Check for a Winner
function checkWinner() {
// Check rows
    for (let i = 0; i < 3; i++) {
        if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
        ) {
        return true;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (
        board[0][j] === currentPlayer &&
        board[1][j] === currentPlayer &&
        board[2][j] === currentPlayer
        ) {
        return true;
        }
    }

    // Check diagonals
    if (
        board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer
    ) {
        return true;
    }

    if (
        board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer
    ) {
        return true;
    }

    return false;
}

// Make a Move
function makeMove(row, col) {
    let validPlay = false;
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        validPlay = true;
        // currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    // Print board to console
    console.table(board);

    // Check for a winner
    if (checkWinner()) {
        console.log('Player ' + (currentPlayer) + ' wins!');
        validPlay = false;
        resetBoard();
    } else {
        // Check for a tie
        let isTie = true;
        for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
            isTie = false;
            break;
            }
        }
        }

        if (isTie) {
        console.log("It's a tie!");
        resetBoard();
        }
    }

    if ((validPlay) && !(checkWinner())) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        console.log(`It's ${currentPlayer}'s turn. makeMove(row, col)`);
    }
}

// Reset the Board
function resetBoard() {
board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
currentPlayer = 'X';
}

// Example moves
makeMove(0, 0);
makeMove(1, 0);
makeMove(0, 1);
makeMove(1, 1);
