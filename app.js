const section = document.querySelector('.game');
let click = true;

const game = () => {
    // creating game board
    for (let i = 0; i < 1024; i++){
        const div = document.createElement('div');
        div.classList.add('board');
        section.appendChild(div);
        // when mouse hovers over divs they change colors ("drawing" effect)
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "purple";
        })
    }
}


game();
