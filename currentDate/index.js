var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today1 = mm + '_' + dd + '_' + yyyy;
console.log(today1)
today2 = mm + '/' + dd + '/' + yyyy;
console.log(today2)
today3 = dd + '_' + mm + '_' + yyyy;
console.log(today3)
today4 = dd + '/' + mm + '/' + yyyy;
console.log(today4)

let addDate1 = document.getElementById('h1');
let addDate2 = document.getElementById('h1').textContent += today2;

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

btn1.addEventListener('click', addDate2);
btn2.onclick = addDate2;

function displayDate() {
    addEventListener
}