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

//Define the function addition with three parameters two number and a operator
function addition(firstNumber, operator, secondNumber) {

//Convert input to numbers first
let num1 = Number(firstNumber);
let num2 = Number(secondNumber);

//If number is not a number 
if(Number.isNaN(num1) || Number.isNaN(num2)){
    //Display error
    console.log(`Addition error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
    //Return null
    return null
}
//Perform the addition
let resultNumber = num1 + num2;
//Return the result 
return resultNumber;

}

console.log(addition("0", "", 1))


function subtraction(firstNumber, operator, secondNumber){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Subtraction error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
    }

let resultNumber = num1 - num2

return resultNumber

}

console.log(subtraction(51,"",1))


function multiplication(firstNumber, operator, secondNumber){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if(Number.isNaN(num1) || Number.isNaN(num2)){
        console.log(`Multiplication error : \nInvalid data type \nthe first Number is ${typeof(firstNumber)} \nThe second number is ${typeof(secondNumber)} \nboth value should be a number`)
        return null
    }

let resultNumber = num1 * num2

return resultNumber

}

console.log(multiplication(1,"",9))

