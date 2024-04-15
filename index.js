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
let colorChoice = 'white';

function checkColorButtonInput(buttonId, colorInQuotations){
    buttonId.addEventListener('click', () => {
        currentButton.style.backgroundColor = colorInQuotations;
        colorChoice = colorInQuotations;
    });
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
