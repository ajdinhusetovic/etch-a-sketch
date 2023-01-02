const boardSizeInput = document.querySelector('.board-size');
const boardSizeChangeBtn = document.querySelector('.board-size-btn');



function makeBoard(size){
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        board.appendChild(square)
        square.addEventListener('mouseover', colorSquare)
    }
}

makeBoard(16);

function changeSize(input){
    if (input > 100 || input < 2){
        alert("INVALID SIZE (2 is minimum and 100 is maximum)")
    }else {
        makeBoard(input);
    }
}

function colorSquare(){
    this.style.backgroundColor = color;
}

function changeColor(colorInput){
    color = colorInput
}
