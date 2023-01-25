// <-------------   Elements  --------------->
const boardEl = document.getElementById('board')
const player1 = {
    id: 1,
    color: 'red'
}
const player2 = {
    id: -1,
    color: 'black'
}
class Piece {
    constructor(color, row, col) {
        this.color = color;
        this.king = false;
        this.row;
        this.col;
    }
}
// <-------------   State  --------------->
let winner, turn = 1, board, currentLocation, newLocation;

// <------------- Game Logic  --------------->

init()
function init() {
    board = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
    ]
    checkerboard();
}

function checkerboard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((j % 2 == 0 && i % 2 == 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                const currentPiece = document.createElement('div')
                const gridSquare = document.getElementById(`${i}-${j}`)
                gridSquare.style.backgroundColor = 'lightgrey';
                if (board[i][j]) {
                    console.log('active')
                    currentPiece.style.height = '30px';
                    currentPiece.style.width = '30px';
                    currentPiece.style.borderRadius = '15px';
                    currentPiece.style.margin = '10px auto';
                    currentPiece.style.backgroundColor = board[i][j]['color']
                }
                console.log(currentPiece)
                gridSquare.appendChild(currentPiece)
                if (i < 3) {
                    board[i][j] = {
                        color: player1.color,
                        king: false
                    }
                } else if (i > 4) {
                    board[i][j] = {
                        color: player2.color,
                        king: false
                    }
                }
            }
        }
    }
}

function renderBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((j % 2 == 0 && i % 2 == 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                curSqr = document.getElementById(`${i}-${j}`).firstChild
                if ((board[i][j])) {
                    curSqr.style.backgroundColor = board[i][j]['color']
                }
            }
        }
    }
}
renderBoard();

boardEl.addEventListener('click', function(event) {
    if (!currentLocation) {
        currentLocation = event.target.parentElement.id.split('-')
        console.log(currentLocation)
        return currentLocation;
    } else {
        newLocation = event.target.parentElement.id.split('-')
        console.log(newLocation)
        handleMove();
        return newLocation;
    }
})

function handleMove() {
    board[newLocation[0], newLocation[1]] = board[currentLocation[0], currentLocation[1]]
    //board[currentLocation[0], currentLocation[1]] = null;
    renderBoard();
    console.log(board[currentLocation[0]][currentLocation[1]])
}
