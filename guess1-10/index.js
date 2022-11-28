const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess a number between 1 and 10 inclusive')
if (gnum == num)
    console.log('You guessed it!!')
    else
    console.log('wronggg, the number was ' + gnum)