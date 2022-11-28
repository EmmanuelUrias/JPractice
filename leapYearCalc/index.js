function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.getElementById('h1').textContent += leapYear(2016);
document.getElementById('h1').textContent += ', ' + leapYear(2015);