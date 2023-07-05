//BUSINESS LOGIC
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    return number1 / number2
}

//USER INTERFACE LOGIC
const number1 = parseInt(prompt("enter a number"));
const number2 = parseInt(prompt ("enter another number"));

window.alert("the sum of ur numbers is " + add(number1, number2) + ". ALSO.. " + number1 + " - " + number2 + " = " + subtract(number1, number2) + " | " + number1 + " x " + number2 + " = " + multiply(number1, number2) + " | " + number1 + " ÷ " + number2 + " = " + divide(number1, number2));