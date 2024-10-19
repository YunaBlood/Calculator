/* High level pseudo code:
1.Calculator function with all operator 
2.Get user input
3.Validate user input
4.Display user input 
5.Store the user input and the operator
6. Call the appropriate operator function (addition, subtraction, multiplication, etc.) when "=" is pressed
7.Display result
8.Ensure the calculator evaluate only one pair of number a times
9.Handle error and edge cases
10.Division by 0 or multiple decimal points
11.Handle "=" key when clicked and not all number are on the display
12.Add keyboard support
13.End program
*/

let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let operation = null
let result = null
let step = 0
let numArray = []
let secondNumberArray = []
let hasEnteredDigit = false

const currentDisplay = document.querySelector(".current-operand")
const numberButton = document.querySelector(".number")
const decimal = document.querySelector(".decimal")
const equal = document.querySelector(".equal")
const operatorButton = document.querySelectorAll('.operator')

function disableDecimalButton(){
    decimal.disabled = true;
}

function disabledOperatorButton(){
    operatorButton.forEach((button) => (button.disabled = true))
}

disableDecimalButton()
disabledOperatorButton()

function activeDecimalButton(){

    decimal.disabled = false
}

function activeOperatorButton(){
    operatorButton.forEach((button) => (button.disabled = false))
}


function displayNumber(num){
    if(step === 0 || step === 1 ){
        if(num === '.' && numArray.includes('.')) return; // Prevent multiple decimals
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))
        currentDisplay.textContent = numArray.join('')
        hasEnteredDigit = true
    }else if(step === 2){
        if(num === '.' && secondNumberArray.includes('.')) return;
        secondNumberArray.push(num)
        secondNumber = Number(secondNumberArray.join(''))
        currentDisplay.textContent = `${firstNumber}${operation}${secondNumberArray.join('')}` 
    }
    activeDecimalButton();
    activeOperatorButton();
}

function displayOperation(op) {
    if (operation !== null && step === 2) {
        calculate(); 
        firstNumber = result;
        secondNumberArray = [];
        secondNumber = null;
    }

    operation = op;
    currentDisplay.textContent += ` ${op} `; 
    step = 2; //
    hasEnteredDigit = false;
}



function clearDisplay(){
    currentDisplay.textContent = 0
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumberArray =[]
    disableDecimalButton()
    disabledOperatorButton()
}


function deleteLastChar() {
    if (step === 1 && numArray.length > 0) { // For first number
        numArray.pop(); // Remove the last digit from the array
        currentDisplay.textContent = numArray.join('') || "0"; // Update display or reset to 0 if empty
        firstNumber = numArray.length ? Number(numArray.join('')) : null; // Update firstNumber if there's still digits
    } else if (step === 2 && secondNumberArray.length > 0) { // For second number
        secondNumberArray.pop(); // Remove the last digit from the array
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1); // Remove the last character from the display
        secondNumber = secondNumberArray.length ? Number(secondNumberArray.join('')) : null; // Update secondNumber
    } else {
        clearDisplay(); // Clear if there are no more digits
    }
}



function percent(percent){
    if(percent === "%"){
        result = firstNumber/100
        currentDisplay.textContent = result.toFixed(2);

    }
    currentDisplay.textContent = result.toFixed(2); // This rounds the result to 2 decimal places.
;
}


const calculate = () => {

    if (firstNumber === null || isNaN(firstNumber)) {
        currentDisplay.textContent = "Enter a Number";
        return;
    }

    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0 || secondNumber === null || secondNumber === undefined) {
                console.log(secondNumber)
                clearDisplay();
                currentDisplay.textContent = "Impossible to divide by 0";
                return;
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            return;
    }

    currentDisplay.textContent = result.toFixed(2);
    if (secondNumber === null || isNaN(secondNumber)) {
        secondNumber = firstNumber;
    }

    // Resetting the calculator state
    firstNumber = result; // Use the result for the next calculation
    secondNumber = null;
    numArray = [];
    secondNumberArray = [];
    operation = null;
    step = 1;
    disableDecimalButton()
};


function handleDecimal() {
    if (step === 1 && !numArray.includes('.')) { 
        numArray.push('.');
        currentDisplay.textContent = numArray.join('');
        disableDecimalButton();
    } else if (step === 2 && !secondNumberArray.includes('.')) {
        secondNumberArray.push('.');
        currentDisplay.textContent = currentDisplay.textContent + '.';
        disableDecimalButton();
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        displayNumber(key);
    }

    if (['+', '-', '*', '/'].includes(key)) {
        displayOperation(key);
    }


    if (key === 'Enter') {
        calculate();
    }

    if(key === 'Backspace'){
        deleteLastChar();
    }

    if (key.toLowerCase() === 'c') {
        clearDisplay();
    }

    if (key === '.') {
        if (!displayValue.includes('.')) {
            displayNumber('.');
        }
    }
});


// keyboardSupport();