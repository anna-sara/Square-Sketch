
const container = document.querySelector('#container');


for (let i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.classList.add("box");
    container.appendChild(div);   
}

const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach(box => box.addEventListener("mouseover", changeColorHover));

function changeColorHover(e) {
    e.target.classList.add('newBgColor');
}