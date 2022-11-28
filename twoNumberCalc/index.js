function multiplyBy() {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    document.getElementById('result').innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    document.getElementById('result').innerHTML = num1 / num2;
}

function addBy() {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    document.getElementById('result').innerHTML = num1 * 1 + num2 * 1;
}

function subtractBy() {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    document.getElementById('result').innerHTML = num1 - num2;
}