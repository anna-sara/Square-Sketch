const container = document.querySelector('#container');
const btnAmountOfSquares = document.querySelector('.amountOfSquares');
btnAmountOfSquares.addEventListener('click', changeAmountOfSquare);
const btnNewColor = document.querySelector('.newColor');
btnNewColor.addEventListener('click', randomRGB);
let rgbColor = "11, 87, 62";
makeSquares(8);


function makeSquares(amount) {
    let squaresPerSide = amount;
    console.log(amount);
    let amountOfSquares = squaresPerSide * squaresPerSide;
    console.log(amountOfSquares);
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 1; i <= amountOfSquares; i++) {
        let div = document.createElement('div');
        div.classList.add("box");
        container.appendChild(div);   
    }

    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.addEventListener("mouseover", changeColorHover));
    }


function changeColorHover(e) {

    let bgColor = e.target.style.backgroundColor;

    console.log(bgColor)

    switch (bgColor) {
        case "":
            e.target.style.backgroundColor = `rgb(${rgbColor})`;
            console.log(rgbColor);
            break;
        case `rgb(${rgbColor})`:
            e.target.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
            console.log(rgbColor);
            break;
        case  `rgba(${rgbColor}, 0.8)`:
            e.target.style.backgroundColor =  `rgba(${rgbColor}, 0.6)`;
            break;
        case   `rgba(${rgbColor}, 0.6)`:
            e.target.style.backgroundColor =  `rgba(${rgbColor}, 0.4)`;
            break;
        case  `rgba(${rgbColor}, 0.4)`:
            e.target.style.backgroundColor =  `rgba(${rgbColor}, 0.2)`;
            break;
        case  `rgba(${rgbColor}, 0.2)`:
            e.target.style.backgroundColor = "";
            break;
        default:
            break;

    }
}

function randomRGB() {
    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");

    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    rgbColor = `${r}, ${g}, ${b}`; // Collect all to a css color string
    console.log(rgbColor);
    
}

function changeAmountOfSquare(e) {
    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");


   let amount  = prompt("Choose a number of squares per side for the new grid (Max 80)");
    
    if(amount  > 80) {
        alert("Your number is to high. Pick a new number")
       amount  = prompt("Choose a number of squares per side for the new grid (Max 80)");
    }

    if (isNaN(amount)) {
        alert("You must pick a number");
       amount  = prompt("Choose a number of squares per side for the new grid (Max 80)");
    }

    makeSquares(amount);
}