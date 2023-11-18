let displayVal = "0";
let firstNum = "0";
let operator = "0";
let secondNum = "0";
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
        return subtract(x,y)
    } else if (o === "*") {
        return multiply(x,y)
    } else if (o === "/") {
        return divide(x,y) 
    }
}

const expression = document.querySelector('#expression');

const result = document.querySelector('#result');

const btnDelete = document.querySelector('#delete');

const btnClear = document.querySelector('#clear');
btnClear.addEventListener ('click', () => {
    expression.textContent = "";
    result.textContent = "";
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
    expression.textContent += ","
)

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (!displayVal.includes("+")) {
        expression.textContent += "+";
    }
    displayVal = expression.textContent;
    operator = "+";
    firstNum = Number(displayVal.slice(0,-1));
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    expression.textContent += "-";
    displayVal = expression.textContent;
});

const multication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
    expression.textContent += "*";
    displayVal = expression.textContent;
});

const division = document.querySelector('#division');
division.addEventListener('click', () => {
    expression.textContent += "/";
    displayVal = expression.textContent;
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    secondNum = Number(displayVal.split('+')[1]);
    operate();
})


