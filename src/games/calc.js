import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const operations = ['+', '-', '*'];
const maxFirstNumber = 100;
const maxsecondNumber = 50;

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(maxFirstNumber);
  const secondNumber = getRandomNumber(maxsecondNumber);
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
