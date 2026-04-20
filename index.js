let num1 = 0;
let num2 = 0;
let operator = "";
let firstNumber = true;
let result = null;

//Calculations

function add() {
    return num1 + num2;
}

function subtract() {
    return num1 - num2;
}

function multiply () {
    return num1 * num2;
}

function divide () {
    return num1 / num2;
    //TODO: decimals
}

function operate () {
    switch (operator) {
        case "+" :
            return add();

        case "-" :
            return subtract();

        case "*" :
            return multiply();
        
        case "/" :
            return divide();
    }
}


function setNumber(num) {
    if (firstNumber) {
        if (num1 == null) {
            num1 = num
        }
        num1 += num;
    } else {
        num2 += num;
    }
    printToScreen();
}

function resetAll() {
    num1 = null;
    num2 = null;
    operator = null;
    firstNumber = true;
}

const screenText = document.querySelector(".screen-text");

function printToScreen() {
    if (firstNumber) {
        screenText.textContent = num1;
    } else {
        screenText.textContent = num2;
    }
}
//Event handling

const buttons = document.querySelector(".button-container");

buttons.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        if (event.target.classList.contains("operator")) {
            handleOperator(event.target.textContent)
        } else {
            setNumber(event.target.textContent);
        }
    }
});