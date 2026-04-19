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

// const operatorReg = /[+\-*/]/;
// ^ might need this in the future to identify ANY operator in input strings (if I want to have multiple operators possible for example)

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

// DEBUG FUNCTION - ignore

function debug(arr) {
    let i = 0;
    while (i < arr.length) {
        if (operator.test(arr[i])) {console.log(arr[i])}
        i++;
    }
}

// debug(["hello+world","boing",7,(6+6),"/","-rip","***"]); 