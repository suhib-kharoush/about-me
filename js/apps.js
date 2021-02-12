'use strict';
let userName = prompt('what\'s your name?')

alert('welcome ' + userName + ' let\'s play a guessing game');
let score = 0;

let major = prompt('A\'m i a mechanical engineer?')


while (!major) { major = prompt('please answer yes or no') }
let message;
if (major === 'yes') {
    message = 'you are right';
    score++
    alert('you got ' + score + 'point');

} else if (major === 'no') {
    message = 'you are wrong';
    score++

    alert(message + ' you lost ' + score + 'point');
}


let age = prompt('I\'m 25 years old');

while (!age) { age = prompt('pease just answer yes or no, don\'t leave it empty') }
if (age === 'yes') {
    message = 'true';
    score++
    alert(message + ' you got ' + score + ' points');
} else if (
    age === 'no') {
    message = 'it\'s wrong';
    score++
    alert(message + ' you lost ' + score + ' points');
}


let work = prompt('did i work at my own business?');
work.toLowerCase()

if (work == 'yes') {

    message = 'good job';
    score++
    alert(message + ' you got ' + score + ' points');
} else if (work == 'no') {
    message = 'it\'s wrong';
    score++
    alert(message + ' you lost ' + score + ' points');
}


let learn = prompt('do i learn software development?');
learn.toUpperCase()

if (learn == 'yes' || learn == 'y') {
    message = 'true';
    score++
    alert(message + ' you got ' + score + ' points')
}
else if (learn == 'no' || learn == 'n') {
    message = 'false';
    score++
    alert(message + ' you lost ' + score + ' points')
}

let graduate = prompt('I\'ve graduated from university in 2020');
if (graduate == 'yes' || graduate == 'y') {
    message = 'true'
    score++
    alert(message + ' you got ' + score + ' points')
}
else if (learn == 'no' || learn == 'n') {
    message = 'false';
    score++
    alert(message + ' you lost ' + score + ' points')
}
let foods = ['vegetables', 'fruits', 'meat', 'fish'];
for (let i = 6; i >= 1; i--) {
    let prefer = prompt('guess what the type of food i prefer, you have ' + i + ' attempt');
    for (let x = 0; x < 4; x++) {
        if (prefer.toLowerCase() === foods[x]) {
            i = 0;
        }
    }
}
for (let z = 4; z > 0; z--) {
    let ques = prompt('guess the odd number between 1-19 which in my mind, you have ' + z + ' attempt');
    let theNum = 11;
    if (ques > theNum) {
        alert("too high");
    } if (ques < theNum) {
        alert("too low");
    } if (ques == theNum) {
        alert("you pass");
        break;
    }
}
