import readlineSync from 'readline-sync';

export default function(){
const personName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + personName + '!');
}