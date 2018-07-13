import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const operations = ['+', '-', '*'];
const firstNumber = getRandomNumber(100);
const secondNumber = getRandomNumber(50);

const getPair = () => {
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

export default () => game(cons(descriptionGame, getPair));
