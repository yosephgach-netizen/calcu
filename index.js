let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

function inputNumber(num) {
    if (!isSecond) {
        firstNumber += num;
        document.getElementById("display").value = firstNumber;
    } else {
        secondNumber += num;
        document.getElementById("display").value = secondNumber;
    }
}

function setOperator(op) {
    if (firstNumber !== "") {
        operator = op;
        isSecond = true;
    }
}

function calculate() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b !== 0 ? a / b : "Error";
            break;
    }

    document.getElementById("display").value = result;

    // reset for next calculation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecond = false;
}

function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecond = false;
    document.getElementById("display").value = "";
}
