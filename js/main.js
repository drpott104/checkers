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

// <-------------   State  --------------->
let winner, turn = 1, board, row, col;

// <------------- Game Logic  --------------->

init()
const validChoices = [...document.querySelectorAll('.valid')];
function init() {
    checkerboard();
}
function createPiece(idx, color) {
    validChoices[idx].style.backgroundColor = color;
    validChoices[idx].style.height = '30px';
    validChoices[idx].style.width = '30px';
    validChoices[idx].style.borderRadius = '15px';
    validChoices[idx].style.margin = '10px auto'
}

function checkerboard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((j % 2 == 0 && i % 2 == 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                //creates divs to hold pieces
                const currentSelection = document.getElementById(`r${i}c${j}`)
                currentPiece = document.createElement('div')
                currentPiece.setAttribute('class', 'valid')
                currentSelection.style.backgroundColor = 'lightgrey';
                currentSelection.appendChild(currentPiece)
            }
        }
    }
}
//styles divs to populate board
for (let i=0; i<12; i++) {
    createPiece(i, player1.color)
    createPiece((i+20), player2.color)
}
  
document.querySelector('div')[addEventListener('click', checkMove)]
  
function checkMove(event) {
    if (validChoices.includes(event.target) ) {
        document.querySelector('div')[addEventListener('click', function(evt) {
            const newSquare = evt.target.firstChild
            if (turn === 1) {
                newSquare.style.backgroundColor = player1.color;
            } else  if (turn === -1) {
                console.log('')
                newSquare.style.backgroundColor = player2.color;
            }
            turn *= -1;
            newSquare.style.height = '30px';
            newSquare.style.width = '30px';
            newSquare.style.borderRadius = '15px';
            newSquare.style.margin = '10px auto'
            event.target.removeAttribute('style')
        })]
    }
    console.log(board)
}