import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'What is the result of the expression?\n';

const getGcd = (a, b) => {
  if (b === 1) {
    return b;
  }
  if (a % b === 0) {
    return b;
  }
  return getGcd(b, a % b);
};

const getPair = () => {
  const firstNumber = getRandomNumber(40);
  const secondNumber = getRandomNumber(10);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(question, correctAnswer);
};

export default () => game(cons(descriptionGame, getPair));
