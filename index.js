const board = document.querySelector(".board");

for (let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.classList.add('divBoard');
    div.style.width = '6.25%';
    div.style.height = '6.25%';
    board.appendChild(div);
}