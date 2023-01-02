const board = document.querySelector('.board');
let size = 16;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++){
    let square = document.createElement('div');
    square.style.backgroundColor = "blue";
    board.appendChild(square)
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    })
}