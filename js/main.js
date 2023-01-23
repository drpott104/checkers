// <-------------   Elements  --------------->
let color = '';
let color1 = 'red';
let color2 = 'black';
let width = '50px';
let height = '50px';
let rows = 8;
let cols = 8;
let body = document.querySelector('body');
const board = document.getElementById('board')
const player = {
    id: 1,
    pieces: []
}
const piece = {
    king: false,
    height: '30px',
    width: '30px',
    borderRadius: '15px',
    backgroundColor: 'green'
}

// <-------------   State  --------------->
let winner;
let turn;

// <------------- Game Logic  --------------->

init()
function init() {
    checkerboard();
    createPieces()

}
function createPieces() {
    let idx = 1;

    [...document.querySelectorAll('div')]
   
    // for (let i = 0; i < 3; i++) {
    //     for (let j = 0; j < 4; j++) {
    //         console.log(board)
    //     }
    // }
}


function square(row, width, height, color) {
    let square = document.createElement('div');
    square.style.width = width;
    square.style.height = height;
    square.style.margin = '1px';
    square.style.backgroundColor = color;
    row.append(square);
}
  
function createRow(rowNumber) {
    row = document.createElement('section');
    body.append(row);
    row.setAttribute('id', ('r' + rowNumber));
    row.style.display = 'flex';
    //console.log(row)
    return row;
}
  


function checkerboard() {
    for (let i = 0; i < rows; i++) {
      let row = createRow(String(i));
      for (let j = 0; j < cols; j++) {
        if (j % 2 == 0 && i % 2 == 0) {
          color = color1
        }
        else {
          color = color2;
          //this[setAttribute('id', (`r${i}c${j}`))]
          if (i % 2 !== 0 && j % 2 !== 0) {
            color = color1
          }
        }
        square(row, width, height, color);
        }
    }
}
  
document.querySelector('div')[addEventListener('click', click)]
  
function click(event) {
    console.log(event.target.tagName);
}