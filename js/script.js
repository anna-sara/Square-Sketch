// Find element and put them in varible
const container = document.querySelector('#container');

const btnAmountOfSquares = Array.from(document.querySelectorAll('.amountOfSquares'));
btnAmountOfSquares.forEach(btn => btn.addEventListener('click', changeAmountOfSquare));

const btnSquaresUserChoice = document.querySelector('.amountOfSquaresOwnChoice');
btnSquaresUserChoice.addEventListener('click', squareUserChoice);

const inputUserChoice = document.querySelector('#amountChoiceID');

const btnNewColor = document.querySelector('.newColor');
btnNewColor.addEventListener('click', randomRGB);

const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', resetAll);

const btns = Array.from(document.querySelectorAll('.btn'));

//Default color of squares
let rgbColor = "11, 87, 62";
//Start default amount of squares
makeSquares(8);

/*Function that make the squares. Sets a class and eventlistener 
that will listen for mouseover and then call the function 
changeBgColorHover*/
function makeSquares(amount) {
    console.log(amount);
    let squaresPerSide = amount;
    let amountOfSquares = squaresPerSide * squaresPerSide;
    // Change the grid in container div
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 1; i <= amountOfSquares; i++) {
        let div = document.createElement('div');
        div.classList.add("box");
        container.appendChild(div); 
        div.addEventListener("mouseover", changeBgColorHover);
    }

}

/*Function that will change the backgroundcolor at hover. Color alpha 
changes til the backgroundcolor disapears and then it starts over again */
function changeBgColorHover(e) {

    let bgColor = e.target.style.backgroundColor;

    switch (bgColor) {
        case "":
            e.target.style.backgroundColor = `rgb(${rgbColor})`;
            break;
        case `rgb(${rgbColor})`:
            e.target.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
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

/*Function that will pick a random RGB-color*/ 
function randomRGB() {
    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");

    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    rgbColor = `${r}, ${g}, ${b}`;
    
    changeColorsLayout();
}

function changeColorsLayout() {
    document.querySelector('header').style.borderColor = `rgb(${rgbColor})`;
    btns.forEach(btn => btn.style.borderColor = `rgb(${rgbColor})`);
    btns.forEach(btn => btn.style.color = `rgb(${rgbColor})`); 
    btnSquaresUserChoice.style.borderColor = `rgb(${rgbColor})`;
    btnSquaresUserChoice.style.color = `rgb(${rgbColor})`;
    inputUserChoice.style.borderColor = `rgb(${rgbColor})`
    inputUserChoice.style.color = `rgb(${rgbColor})`;
}

function squareUserChoice(e) {

    // Sets backgroundcolor to ""
    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");

    let usersChoice = document.getElementById('amountChoiceID').value;
    console.log(usersChoice);

    makeSquares(usersChoice);

}

/* Function that will change the amount of squares */
function changeAmountOfSquare(e) {

    // Sets backgroundcolor to ""
    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");

    // Users choice 
    let amount  = e.target.value;
    
   // Checks if amount is bigger then 80
    if(amount  > 80) {
        alert("Your number is to high. Pick a new number")
        amount  = prompt("Choose a number of squares per side for the new grid (Max 80)");
    }
    // Checks if users choice is a number
    if (isNaN(amount)) {
        alert("You must pick a number");
        amount  = prompt("Choose a number of squares per side for the new grid (Max 80)");
    }

    makeSquares(amount);
}

function resetAll() {

    makeSquares(8);

    let boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.style.backgroundColor = "");
    usersChoice = document.getElementById('amountChoiceID').value = "";
    rgbColor = "11, 87, 62";

    changeColorsLayout();
}