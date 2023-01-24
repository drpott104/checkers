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
    constructor(color) {
        this.color = color;
        this.king = false;
    }
}
// <-------------   State  --------------->
let winner, turn = 1, board;

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
                // currentPiece.style.height = '30px';
                // currentPiece.style.width = '30px';
                // currentPiece.style.borderRadius = '15px';
                // currentPiece.style.margin = '10px auto'
                const gridSquare = document.getElementById(`${i}-${j}`)
                gridSquare.style.backgroundColor = 'lightgrey';
                gridSquare.appendChild(currentPiece)
                
                if (i < 3) {
                    board[i][j] = {
                        color: player1.color,
                        king: false
                    }
                    //currentPiece.style.backgroundColor = board[i][j].color;
                } else if (i > 4) {
                    board[i][j] = {
                        color: player2.color,
                        king: false
                    }
                    //currentPiece.style.backgroundColor = board[i][j].color;
                }
            }
        }
    }
}
  


 boardEl.addEventListener('click', checkMove)

 
function checkMove(event) {
    const currentLocation = event.target.parentElement.id.split('-')
    console.log('first click', currentLocation, event.target)
    if (turn === 1){
        if (event.target.style.backgroundColor === player1.color) {
            
            
            
        }
    }
    else if (turn === -1){
        if (event.target.style.backgroundColor === player2.color) {
            console.log(turn)
            
            
        return
        }
    }
}