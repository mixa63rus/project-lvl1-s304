import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const operations = ['+', '-', '*'];
const min = 1;
const max = 100;

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const operation = operations[getRandomNumber(operations.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+': {
      const answer = firstNumber + secondNumber;
      return cons(question, `${answer}`);
    }
    case '-': {
      const answer = firstNumber - secondNumber;
      return cons(question, `${answer}`);
    }
    default: {
      const answer = firstNumber * secondNumber;
      return cons(question, `${answer}`);
    }
  }
};

export default () => game(descriptionGame, questionAndAnswer);
