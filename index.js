const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');
const purpleButton = document.getElementById('purple');
const orangeButton = document.getElementById('orange');
const blackButton = document.getElementById('black');
const pinkButton = document.getElementById('pink');
const whiteButton = document.getElementById('white');
const currentButton = document.getElementById('currentColor');
const gridContainer = document.getElementById('gridContainer');
const resetColors = document.getElementById('resetColors')
let colorChoice = 'white';
let i = 0;
let ins = 0;
let mouseDown = false;
let gridSize = 48;

function checkColorButtonInput(buttonId, colorInQuotations){
    buttonId.addEventListener('click', () => {
        currentButton.style.backgroundColor = colorInQuotations;
        colorChoice = colorInQuotations;
    });
};

function renderContainerContainer(){
    const containerContainer = document.createElement('div');
    containerContainer.classList.add('containerContainer');
    gridContainer.appendChild(containerContainer);
    ins = 0;
    while (ins < gridSize){
        const colorContainer = document.createElement('div');
        colorContainer.classList.add('colorContainer');
        containerContainer.appendChild(colorContainer);
        ins ++;
        colorContainer.addEventListener('mouseover', () => {
            colorContainer.addEventListener('mousedown', () => {
                mouseDown = true;
            });
            colorContainer.addEventListener('mouseup', () => {
                mouseDown = false;
            });
            if (mouseDown === true){
                colorContainer.style.backgroundColor = colorChoice;
            };
        });
    };
};

checkColorButtonInput(redButton, 'red');
checkColorButtonInput(blueButton, 'blue');
checkColorButtonInput(greenButton, 'green');
checkColorButtonInput(yellowButton, 'yellow');
checkColorButtonInput(purpleButton, 'purple');
checkColorButtonInput(orangeButton, 'orange');
checkColorButtonInput(blackButton, 'black');
checkColorButtonInput(pinkButton, 'pink');
checkColorButtonInput(whiteButton, 'white');
resetColors.addEventListener('click', () => {
    const colorContainers = document.querySelectorAll('.colorContainer');
    colorContainers.forEach(container => {
        container.style.backgroundColor = 'white';
    });
});


while (i < gridSize ){
    renderContainerContainer();
    i ++;
};