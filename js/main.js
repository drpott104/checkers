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
const piece = {
    king: false
}
// <-------------   State  --------------->
let winner, turn = 1, board;

// <------------- Game Logic  --------------->

init()
const validChoices = [...document.querySelectorAll('.valid')];
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
                currentPiece = document.createElement('div')
                currentPiece.style.height = '30px';
                currentPiece.style.width = '30px';
                currentPiece.style.borderRadius = '15px';
                currentPiece.style.margin = '10px auto'
                const currentSelection = document.getElementById(`r${i}c${j}`)
                currentSelection.style.backgroundColor = 'lightgrey';
                currentSelection.appendChild(currentPiece)
                
                if (i < 3) {
                    board[i][j] = {
                        color: player1.color,
                        king: false
                    }
                    currentPiece.style.backgroundColor = board[i][j].color;
                } else if (i > 4) {
                    board[i][j] = {
                        color: player2.color,
                        king: false
                    }
                    currentPiece.style.backgroundColor = board[i][j].color;
                }
            }
        }
    }
}
  
document.querySelector('div')[addEventListener('click', checkMove)]
  
function checkMove(event) {
    console.log(event.target)
    
    // if (validChoices.includes(event.target) ) {
    //     document.querySelector('div')[addEventListener('click', function(evt) {
    //         const newSquare = evt.target.firstChild
    //         if (turn === 1) {
                
    //         } else  if (turn === -1) {
                
    //         }
    //         turn *= -1;
            
    //     })]
    // }
}