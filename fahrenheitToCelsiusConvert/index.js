function fToC (fahrenheit) {
    fahrenheit = document.getElementById('fTemp').value;
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32)* 5 / 9;
    document.getElementById('result').innerHTML = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
}

function cToF (celsius) {
    celsius = document.getElementById('cTemp').value;
    var cTemp = celsius;
    var cToFah = cTemp * 9 / 5 + 32;
    document.getElementById('result').innerHTML = cTemp + '\xB0F is ' + cToFah + '\xB0C.';
}

