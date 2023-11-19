

let firstNum = "0";
let operator = "0";
let secondNum = "0";
let displayVal = `${firstnum}${operator}${secondNum}`;
let resultVal = "0";

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

function operate(x,o,y) {
    x = firstNum;
    o = operator;
    y = secondNum;
    
    if (o === "+") {
        resultVal = add(x,y)
        result.textContent = resultVal;
    } else if (o === "-") {
        resultVal = subtract(x,y)
        result.textContent = resultVal;
    } else if (o === "*") {
        resultVal = multiply(x,y)
        result.textContent = resultVal;
    } else if (o === "/") {
        resultVal = divide(x,y)
        result.textContent = resultVal; 
    }
}

const expression = document.querySelector('#expression');

const result = document.querySelector('#result');

const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', () => {
let deleteVal = displayVal.slice(0,-1);
displayVal = deleteVal;
expression.textContent = displayVal;
}
)

const btnClear = document.querySelector('#clear');
btnClear.addEventListener ('click', () => {
    expression.textContent = "";
    result.textContent = "";
    displayVal = "0";
    firstNum = "0";
    operator = "0";
    secondNum = "0";
    resultVal = "0";
})


const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => {
    expression.textContent += "1";
    displayVal = expression.textContent;
});


const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => {
    expression.textContent += "2"
    displayVal = expression.textContent;
});

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => {
    expression.textContent += "3";
    displayVal = expression.textContent;
});

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    expression.textContent += "4";
    displayVal = expression.textContent;
});

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => {
    expression.textContent += "5";
    displayVal = expression.textContent;
});

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => {
    expression.textContent += "6";
    displayVal = expression.textContent;
});

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => {
    expression.textContent += "7";
    displayVal = expression.textContent;
});

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => {
    expression.textContent += "8";
    displayVal = expression.textContent;
});

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => {
    expression.textContent += "9";
    displayVal = expression.textContent;
});

const btn0 = document.querySelector('#zero');
btn0.addEventListener('click', () => {
    expression.textContent += "0";
    displayVal = expression.textContent;
})

const comma = document.querySelector('#comma');
comma.addEventListener('click', () => 
    expression.textContent += "."
)

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operator = "+";
    if (!displayVal.includes("+")) {
        expression.textContent += "+";
    }
    displayVal = expression.textContent;
    firstNum = Number(displayVal.slice(0,-1));
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    operator = "-";
    if (!displayVal.includes("-")) {
        expression.textContent += "-";
    }
    displayVal = expression.textContent;
    firstNum = Number(displayVal.slice(0,-1));
});

const multication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
    operator = "*";
    if (!displayVal.includes("x")) {
        expression.textContent += "x";
    }
    displayVal = expression.textContent;
    firstNum = Number(displayVal.slice(0,-1));
});

const division = document.querySelector('#division');
division.addEventListener('click', () => {
    operator = "/";
    if (!displayVal.includes("-")) {
        expression.textContent += "÷";
    }
    displayVal = expression.textContent;
    firstNum = Number(displayVal.slice(0,-1));
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    expression.textContent += "=";
    switch(operator) {
    case "+":
       secondNum = Number(displayVal.split('+')[1]); 
       break
    case "-":
        secondNum = Number(displayVal.split('-')[1]); 
        break
    case "*":
        secondNum = Number(displayVal.split('x')[1]);
        break
    case "/":
        secondNum = Number(displayVal.split('÷')[1]); 
        break
    }
    operate();
})


