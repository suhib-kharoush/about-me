'use strict';
let userName = prompt('what\'s your name?')
/*console.log(userName);
*/
alert('welcome ' + userName + ' let\'s play a guessing game');

/*let major = prompt('I\'m i a mechanical engineer?')
console.log(major);
switch (major) {
    case 'yes':
        document.write('great');
        break;
    case 'no':

        console.log('you\'re wrong');

}

*/
let major = prompt('I\'m i a mechanical engineer?');
/*console.log(major);*/
let message;
if (major === 'yes') {
    message = 'you are right';
} else if (major === 'no') {
    message = 'you are wrong'
} alert(message);

let age = prompt('I\'m 25 years old');
/*console.log(age);*/
if (age === 'yes') {
    message = 'true';
} else if (
    age === 'no') {
    message = 'it\'s wrong';
}
alert(message);

let work = prompt('did i work at my own business?');
work.toLowerCase()
/*console.log(work);*/
if (work == 'yes') {
    message = 'good job';
} else if (work == 'no') { message = 'it\'s wrong' }
alert(message);

let learn = prompt('do i learn software development?');
learn.toUpperCase()
/*console.log(learn);*/
if (learn == 'yes' || learn == 'y') { message = 'you are won'; }
else if (learn == 'no' || learn == 'n') { message = 'you fail'; }
alert(message);
