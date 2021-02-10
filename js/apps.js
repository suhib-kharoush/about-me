'use strict';
function theFirst() {
    
let userName = prompt('what\'s your name?')
/*console.log(userName);
*/
alert('welcome ' + userName + ' let\'s play a guessing game');
let score = 0;
} theFirst()

function myStudy() {
let major = prompt('I\'m i a mechanical engineer?')
//console.log(major);
// switch (major) {
//     case 'yes':
//         document.write('great');
//         break;
//     case 'no':

//         console.log('you\'re wrong');
// }
//let major = prompt('I\'m i a mechanical engineer?');
/*console.log(major);*/
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
} myStudy()

function myAge() {
let age = prompt('I\'m 25 years old');
/*console.log(age);*/
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
}
myAge()

let work = prompt('did i work at my own business?');
work.toLowerCase()
/*console.log(work);*/
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
/*console.log(learn);*/
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
let foods = ['vegetables','fruits','meat','fish'];
for (let i=6 ; i>=1 ; i-- ){
let prefer = prompt('guess what the type of food i prefer, you have '+i+' attempt');
for (let x=0; x<4;x++)
{if(prefer.toLowerCase()===foods[x]){
i=0;
}}
}
// while (prefer !=foods ) {prefer = prompt('guess what the type of food i prefer, you have '+ i +'attempts');
//  prefer = parseint(prefer);
//  break;} 
//  if (prefer==foods) {y=y+1;
//     i=0 
//  } else if (prefer>foods){alert('too high');} else {alert("too low");}
// }
// if (foods!=prefer){alert('my favourite food is 1')}
// let field1 = 'mechanical'
// let field2 = 'electrical'
// let field3 = 'civil'
// let field4 = 'thermal'
// let field5 = 'automotive'
// let field6 = 'telecomunication'
// let field7 = 'computer'
// let field8 = 'power'
// let field9 = 'biomedical'
// let field10 = 'renewable energy'


// let field = ['mechanical', 'electrical', 'civil', 'thermal', 'automotive', 'telecomunication', 'computer', 'power', 'biomedical', 'renewable energy'];


// for (let i = 0; i < field.length; i++) {
//     let majorCheck = prompt(field[i]);

//     if (majorCheck < 5) {
//         alert('too low');

//     } else if (majorCheck >= 5) { alert('too high') };
//     // field = [i];
//     if (field[i] == majorCheck) {

//     }

// }
    // field = prompt(field);
// field[1]