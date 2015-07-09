document.getElementById('screen').focus();

var var1, var2, operation, operationPressed;

function add() {
    operationPressed = true;

    var1 = document.getElementById('screen').value;
    document.getElementById('screen').value = "";
    operation = "+";

    document.getElementById('screen').focus();
}

function subtract() {
    operationPressed = true;

    var1 = document.getElementById('screen').value;
    document.getElementById('screen').value = "";
    operation = "-";

    document.getElementById('screen').focus();
}

function multiply() {
    operationPressed = true;

    var1 = document.getElementById('screen').value;
    document.getElementById('screen').value = "";
    operation = "*";

    document.getElementById('screen').focus();
}

function divide() {
    operationPressed = true;

    var1 = document.getElementById('screen').value;
    document.getElementById('screen').value = "";
    operation = "/";

    document.getElementById('screen').focus();
}

function showResult() {
    if(operationPressed) var2 = document.getElementById('screen').value;
    document.getElementById('screen').value = calc();

    document.getElementById('screen').focus();
    operationPressed = false;
}

function calc() {
    if(operation == "+") return parseInt(var1) + parseInt(var2);
    else if(operation == "-") return parseInt(var1) - parseInt(var2);
    else if(operation == "*") return parseInt(var1) * parseInt(var2);
    else if(operation == "/") return parseInt(var1) / parseInt(var2);
}

function clean() {
    var1 = var2 = operation = "";
    document.getElementById('screen').value = "";

    document.getElementById('screen').focus();
}
