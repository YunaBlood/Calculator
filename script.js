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





//1.Calculator function

//Addition calculation

//Make calculator object that contain all arithmetic operation

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const erase = document.querySelector(".backspace")
const previousDisplay = document.querySelector(".previous-operand")
const currentDisplay = document.querySelector(".current-operand")

function addition(firstNumber,operator, secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Addition error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 + num2
}
function subtraction(firstNumber,operator,secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Subtraction error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 - num2
}
function multiplication(firstNumber, operator, secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Multiplication error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 * num2
}
function division(firstNumber,operator, secondNumber) {
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
            console.log(`Division error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
            return null
        }else if(num2 == 0){
            console.log(`Impossible to divide by 0`)
            return null
        }
        return num1 / num2
}
function percentage(firstNumber, operator, secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
            console.log(`Division error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
            return null
        }else if(num2 == 0){
            console.log(`Cannot calculate percentage of zero`)
            return null
        }
        return num1 / num2 * 100
}

function operate(firstNumber,operator,secondNumber){
    switch(operator) {
        case "+":
            let resultAddition = addition(firstNumber, "+", secondNumber)
            return resultAddition;
        case "-":
            let resultSubtraction = subtraction(firstNumber, "-", secondNumber)
            return resultSubtraction;
        case "*":
            let resultMultiplication = multiplication(firstNumber, "*", secondNumber)
            return resultMultiplication
        case "/":
            let resultDivision = division(firstNumber, "/", secondNumber)
            return resultDivision
        case "%":
            let resultPercentage = percentage(firstNumber, "%", secondNumber)
            return resultPercentage
        default:
            return null
    }
}


function displayOperation(operation){

}

function displayNumber(){

}

function clearAll(){

}


function deletes(){

}



function updateDisplay(){
}



function calculate(){
    operators.forEach(operatorButton => {
        operatorButton.addEventListener("click", () => {
            if(currentDisplay.value !== null){
                firstNumberStored = parseInt(currentDisplay.value);
                console.log("Current Display Value:",typeof(currentDisplay.value) );

                operatorStored = operatorButton.value;
                console.log("First Number:", typeof(firstNumberStored))
                console.log("Operator: ", typeof(operatorStored))
            }else{
                console.log("Error: No number entered before operator")
            }
        })
    })

    equal.addEventListener("click", () => {
        if(currentDisplay.value !== ""){
            secondNumberStored = parseInt(currentDisplay.value)
            console.log("Second Number:", typeof(secondNumberStored));

            const result = userInterface.operate(firstNumberStored, operatorStored, secondNumberStored)
            if(result !== null){
                currentDisplay.value = result;
                console.log(currentDisplay.value)
            }else{
                console.log("Error: Invalid operation result.")
            }
        }else {
            console.log("Error: No second number entered")
        }
    })
}