const section = document.querySelector('.game');

const createBoard = () => {
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('board');
        section.appendChild(div);
    }
}

createBoard();