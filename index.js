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
            if (num == ".") {num1 = "0."}
            else {num1 = num}
            result = null;
        } else {
            if (!(num == "." && num1.includes("."))) {
                num1 += num; 
            }
        }

    
    } else {
        //Replacing the starting 0
        if (num2 === null) {
            if (num == ".") {num2 = "0.";}
            else {num2 = num}
        } else {
            if (!(num == "." && num2.includes("."))) {
                num2 += num; 
            }
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
    //Operators NOT listed in operate()
    switch (newOperator) {

        case "C": return resetAll();

        case "CE":
            firstNumber ? (num1 = null) : (num2 = null);
            screenText.textContent = "0";
            return;

        case "=":
            if (num1 && num2 && !(operator === null)) {
                if ((num1 == 0 || num2 == 0) && operator == 3) {
                    resetAll();
                    screenText.textContent = "What do you think?";
                    return;
                };
                solve();
                printToScreen(true);
            }
            return;
    }

    //Operators listed in operate():

    //Work with the current result
    if (result) {
        reuseResult();
        operator = assignOperator(newOperator);

    //Can we just calculate the current input and then work with the result?
    } else if (num2) {
        solve();
        reuseResult();
        operator = assignOperator(newOperator);

    //The default case: Switching to Num2 after entering Num1
    } else if (num1) {
        operator = assignOperator(newOperator);
        firstNumber = false;

    //Nothing applicable, e.g. pressing Operator twice
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