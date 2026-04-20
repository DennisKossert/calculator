let num1 = null;
let num2 = null;
let operator = null;
let firstNumber = true;
let result = null;

//Calculations

function add() {
    return Number(num1) + Number(num2);
}

function subtract() {
    return Number(num1) - Number(num2);
}

function multiply () {
    return Number(num1) * Number(num2);
}

function divide () {
    return Number(num1) / Number(num2);
    //TODO: decimals
}

function operate () {
    switch (operator) {
        case 0 :
            return add();

        case 1 :
            return subtract();

        case 2 :
            return multiply();
        
        case 3 :
            return divide();
    }
}

//

function resetAll() {
    num1 = null;
    num2 = null;
    operator = null;
    firstNumber = true;
    screenText.textContent = "0";
}

//Number input

function setNumber(num) {
    if (firstNumber) {
        //Replacing the starting 0 and disable working with previous result
        if (num1 === null) {
            result = null;
            num1 = num
        } else {
        num1 += num; 
        }

    
    } else {
        //Replacing the starting 0
        if (num2 === null) {
            num2 = num
        } else {
        num2 += num; 
        }
    }
    printToScreen(false);
}

const screenText = document.querySelector(".screen-text");

function printToScreen(finalResult) {
    if (!finalResult) {      
        if (firstNumber) {
            screenText.textContent = num1;
        } else {
            screenText.textContent = num2;
        }
    } else {
        screenText.textContent = result;
    }
}

//Operator Handling

function assignOperator(str) {
    switch (str) {
        case "+" :
            return 0;
        
        case "-" :
            return 1;

        case "*" :
            return 2;

        case "/" :
            return 3;
    };
};


function handleOperator(newOperator) {
    if (newOperator == "C") {return resetAll()};
    if (newOperator == "=") {
        if (num1 && num2 && !(operator === null)) {
            solve();
            printToScreen(true);
        }
        return;
    }
    //FOR ALL OPERATORS IN operate():

    if (result) {
        reuseResult();
        operator = assignOperator(newOperator);
    //Can we just calculate the current input and then work with the result?
    } else if (num2) {
        solve();
        reuseResult();
        operator = assignOperator(newOperator);

    } else if (num1) {
        operator = assignOperator(newOperator);
        firstNumber = false;
    } else {
        return;
    }
}

function reuseResult() {
    num2 = null;
    num1 = result;
    result = null;
    firstNumber = false;
}

function solve() {
    result = operate();
    printToScreen(true);
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