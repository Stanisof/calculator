let operation = '';
let firstNum = '';
let operator = '';
let secondNum = '';
let ongoingOperation = false;
let resultVal = '';

const lastOp = document.querySelector('#lastOp');
const currentOp = document.querySelector('#currentOp');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals');

numberButton.forEach((button) => 
    button.addEventListener('click', () => inputNumber(button)));

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        setupOperation(button);
})});

function inputNumber(button) {
    checkOpStatus();
    currentOp.textContent += button.textContent;
}

function setupOperation(button) {
    transformOperator(button);
    firstNum = Number(currentOp.textContent);
    lastOp.textContent = `${firstNum}${operator}`;
    ongoingOperation = true;

}

function checkOpStatus() {
    if (ongoingOperation) {
        currentOp.textContent = '';}
    ongoingOperation = false;
}

function transformOperator(button) {
    switch(button.textContent) {
        case('+'):
        case('-'):
        operator = button.textContent
            break
        case('x'):
        operator = '*'
            break
        case('÷'):
        operator = '/'
            break
    }
}



equals.addEventListener('click', () => {

    secondNum = Number(currentOp.textContent);
    resultVal = operate(firstNum,operator,secondNum);
    lastOp.textContent = `${firstNum}${operator}${secondNum}=`;
    currentOp.textContent = resultVal;


    
})


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
    o = operator;
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

function chainCal() {
    switch(operator){
        case("+"):
            lastOp.textContent = `${resultVal}+`
        break
        case("-"):
            lastOp.textContent = `${resultVal}-`
        break
        case("*"):
            lastOp.textContent = `${resultVal}x`
        break
        case("/"):
            lastOp.textContent = `${resultVal}÷`
        }
}




const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', () => {
    let deleteVal = operation.slice(0,-1);
    operation = deleteVal;
    lastOp.textContent = operation;
    });

const btnClear = document.querySelector('#clear');
btnClear.addEventListener ('click', () => {
    lastOp.textContent = "";
    currentOp.textContent = "";
    operation = '';
    firstNum = '';
    operator = '';
    secondNum = '';
    resultVal = '';
})


/* const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {

    if (!operation.includes("+")) {
        lastOp.textContent += "+";
        operator = "+";
    } 
    
    if(operation.includes("=")){
        chainCal();
    }else if(operation.includes("-") || operation.includes("x") || operation.includes("÷")){
        operator = "+";
        let deleteVal = operation.slice(0,-1);
        operation = deleteVal;
        lastOp.textContent = `${operation}+`;
    }

    operation = lastOp.textContent;
    firstNum = Number(operation.slice(0,-1));    
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
   
    if (!operation.includes("-")) {
        lastOp.textContent += "-";
        operator = "-";
    }

    if(operation.includes("=")){
        chainCal();
    } else if(operation.includes("+") || operation.includes("x") || operation.includes("÷")){
        operator = "-";
        let deleteVal = operation.slice(0,-1);
        operation = deleteVal;
        lastOp.textContent = `${operation}-`;
    }

    operation = lastOp.textContent;
    firstNum = Number(operation.slice(0,-1));
});

const multication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
     
    if (!operation.includes("x")) {
        operator = "*";
        lastOp.textContent += "x";
    }

    if(operation.includes("=")){
        chainCal();
    } else if(operation.includes("-") || operation.includes("+") || operation.includes("÷")){
        operator = "*";
        let deleteVal = operation.slice(0,-1);
        operation = deleteVal;
        lastOp.textContent = `${operation}x`;
    }

    operation = lastOp.textContent;
    firstNum = Number(operation.slice(0,-1));
});

const division = document.querySelector('#division');
division.addEventListener('click', () => {
    
    if (!operation.includes("÷")) {
        operator = "/";
        lastOp.textContent += "÷";
    }
    
    if(operation.includes("=")){
        chainCal();
    } else if (operation.includes("-") || operation.includes("x") || operation.includes("+")){
        operator = "/";
        let deleteVal = operation.slice(0,-1);
        operation = deleteVal;
        lastOp.textContent = `${operation}÷`;
    }

    operation = lastOp.textContent;
    firstNum = Number(operation.slice(0,-1));
}); */



