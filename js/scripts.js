//BUSINESS LOGIC
function add(number1, number2) {
    return number1 + number2;
}

//USER INTERFACE LOGIC
const number1 = prompt("enter a number");
const number2 = prompt ("enter another number");

window.alert(add(number1, number2));