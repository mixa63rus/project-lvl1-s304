import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'What is the result of the expression?';
const min = 1;
const max = 100;

const getGcd = (a, b) => {
  if (b === 1) {
    return b;
  }
  if (a % b === 0) {
    return b;
  }
  return getGcd(b, a % b);
};

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return cons(question, `${answer}`);
};

export default () => game(descriptionGame, questionAndAnswer);
