let firstNum = '';
let operator = '';
let secondNum = '';
let ongoingOperation = false;
let chainedOperations = null;

const lastOp = document.querySelector('#lastOp');
const currentOp = document.querySelector('#currentOp');
const numberButton = document.querySelectorAll('.number');
const pointButton = document.querySelector('.point');
const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const btnDelete = document.querySelector('#delete');
const btnClear = document.querySelector('#clear');

document.addEventListener('keydown', keyboardSupport)

btnDelete.addEventListener('click', () => backspace(currentOp.textContent));
btnClear.addEventListener ('click', () => clear())

numberButton.forEach((button) => button.addEventListener('click', () => inputNumber(button.textContent)));

pointButton.addEventListener('click', () => typePoint)

operatorButton.forEach((button) => button.addEventListener('click', () => setupOperation(button.textContent)));

equals.addEventListener('click', () => evaluate())


function inputNumber(button) {
    checkOpStatus();
    currentOp.textContent += button;
}

function typePoint() {
    if (!currentOp.textContent.includes(".")){
        currentOp.textContent += '.'
    }
}

function checkOpStatus() {
    if (ongoingOperation) {
        currentOp.textContent = '';
        ongoingOperation = false;
    }
}

function setupOperation(button) {
   
    operator = button;
    if (chainedOperations != null) {
        operator = chainedOperations;
        secondNum = Number(currentOp.textContent);
        firstNum = operate(firstNum, operator, secondNum);
        currentOp.textContent = firstNum;
        chainedOperations = button;
    } else {
        firstNum = Number(currentOp.textContent);
        chainedOperations = operator;
    }

    if (operator == "÷" && firstNum == 0) {    
    alert("I am not angry..");
    clear();
    }

    lastOp.textContent = `${firstNum}${button}`;

    ongoingOperation = true;
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

function evaluate() {
    if (chainedOperations != null) {
        operator = chainedOperations;
    }
    secondNum = Number(currentOp.textContent);
    lastOp.textContent = `${firstNum}${operator}${secondNum}=`;
    currentOp.textContent = operate();
    chainedOperations = null;
}

function backspace(deleteVal) {
    deleteVal = deleteVal.slice(0,-1);
    currentOp.textContent = deleteVal;
}

function clear() {
    firstNum = '';
    operator = '';
    secondNum = '';
    ongoingOperation = false;
    chainedOperations = null;
    lastOp.textContent = "";
    currentOp.textContent = "";
}

function keyboardSupport(e) {

    if (e.key >= 0 || e.key <= 9) inputNumber(e.key)
    
    switch(e.key) {
        case(','):
            typePoint()
            break
        case('+'):
        case('-'):
            setupOperation(e.key)
            break
        case('*'):
            setupOperation('x')
            break
        case('/'):
            setupOperation('÷')
            break
        case('Enter'):
            evaluate()
            break
        case('Backspace'):
            if(currentOp.textContent != '') 
            backspace(currentOp.textContent)
            break
        case('Escape'):
            clear()
            break
    }
    
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