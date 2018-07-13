import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3;

const iter = (questionAndAnswer, count) => {
  if (count === 0) {
    return true;
  }
  const question = car(questionAndAnswer);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = cdr(questionAndAnswer);
  if (answer !== `${correctAnswer}`) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return iter(questionAndAnswer, count - 1);
};

export default (descriptionGame, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionGame);
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
  const isWin = iter(questionAndAnswer, roundCount);
  if (!isWin) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
