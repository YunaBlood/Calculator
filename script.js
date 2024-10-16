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
const calculator = {
    //Define the function addition with three parameters two number and a operator
    addition: function(firstNumber,operator, secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Addition error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 + num2
    },
    subtraction: function(firstNumber,operator,secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Subtraction error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 - num2
    },
    multiplication: function(firstNumber, operator, secondNumber){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Multiplication error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
        }
        return num1 * num2
    },
    division: function(firstNumber,operator, secondNumber) {
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
    },
    percentage: function(firstNumber, operator, secondNumber){
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
}

// 2.Get user input

const userInterface = {
    operator: function (firstNumber,operator,secondNumber){
        switch(operator) {
            case "+":
                let resultAddition = calculator.addition(firstNumber, "+", secondNumber)
                return resultAddition;
            case "-":
                let resultSubtraction = calculator.subtraction(firstNumber, "-", secondNumber)
                return resultSubtraction;
            case "*":
                let resultMultiplication = calculator.multiplication(firstNumber, "*", secondNumber)
                return resultMultiplication
            case "/":
                let resultDivision = calculator.division(firstNumber, "/", secondNumber)
                return resultDivision
            case "%":
                let resultPercentage = calculator.percentage(firstNumber, "%", secondNumber)
                return resultPercentage
            default:
                return null
        }
    }
}