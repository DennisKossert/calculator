let num1 = 0;
let num2 = 0;
let operator = "";

//Calculations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
    //TODO: decimals
}

function calculate (a, b, operator) {
    switch (operator) {

        case "+" :
            return add(a, b);

        case "-" :
            return subtract(a, b);

        case "*" :
            return multiply(a, b);
        
        case "/" :
            return divide(a, b);
    }
}

//Event handling

const buttons = document.querySelector("button-container");

buttons.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        //TODO
    }
});