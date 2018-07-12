import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.\n';
const operations = ['+', '-', '*'];

const getPair = () => {
  const firstNumber = getRandomNumber(40);
  const secondNumber = getRandomNumber(10);
  const operation = operations[getRandomNumber(3)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+':
      return cons(question, firstNumber + secondNumber);
    case '-':
      return cons(question, firstNumber - secondNumber);
    default:
      return cons(question, firstNumber * secondNumber);
  }
};

export default () => {
  return game(cons(descriptionGame, getPair()));
};
