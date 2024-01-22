let firstNum = '';
let operator = '';
let secondNum = '';
let ongoingOperation = false;
let chainedOperations = null;

const lastOp = document.querySelector('#lastOp');
const currentOp = document.querySelector('#currentOp');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals');
const btnDelete = document.querySelector('#delete');
const btnClear = document.querySelector('#clear');

numberButton.forEach((button) => 
    button.addEventListener('click', () => inputNumber(button)));

operatorButton.forEach((button) => {
    button.addEventListener('click', () => setupOperation(button))});

equals.addEventListener('click', () => evaluate())


function inputNumber(button) {
    checkOpStatus();
    currentOp.textContent += button.textContent;
}

function setupOperation(button) {
   
    operator = button.textContent;
    if (chainedOperations != null) {
        operator = chainedOperations;
        secondNum = Number(currentOp.textContent);
        firstNum = operate(firstNum, operator, secondNum);
        currentOp.textContent = firstNum;
        chainedOperations = button.textContent;
    } else {
        firstNum = Number(currentOp.textContent);
        chainedOperations = operator;
    }

    lastOp.textContent = `${firstNum}${button.textContent}`;

    ongoingOperation = true;
}

function checkOpStatus() {
    if (ongoingOperation) {
        currentOp.textContent = '';
        ongoingOperation = false;
    }
}

function transformOperator(operator) {
    switch(operator) {
        case('+'):
        return '+'
        case('-'):
        return '-'
        case('x'):
        return '*'
        case('÷'):
        return '/'
    }
}

btnDelete.addEventListener('click', () => {
    let deleteVal = currentOp.textContent.slice(0,-1);
    currentOp.textContent = deleteVal;
    });

btnClear.addEventListener ('click', () => {
    lastOp.textContent = "";
    currentOp.textContent = "";
    firstNum = '';
    operator = '';
    secondNum = '';
    ongoingOperation = false;
    chainedOperations = null;
})

function evaluate() {
    if (chainedOperations != null) {
        operator = chainedOperations;
    }
    secondNum = Number(currentOp.textContent);
    lastOp.textContent = `${firstNum}${operator}${secondNum}=`;
    currentOp.textContent = operate();
    chainedOperations = null;
}


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b)  {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,o,b) {
    a = firstNum;
    o = transformOperator(operator);
    b = secondNum;

    if (operator == "/" && secondNum === 0) {
        firstNum = '';
        secondNum = '';
    return currentOp.textContent = "I am not angry.."
    }
    switch(o) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
    }
}