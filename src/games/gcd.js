import { cons } from 'hexlet-pairs';
import game from '../game';

const getRandomNumber = max => Math.floor(Math.random() * max);

const getGcd = (a, b) => {
  if (b === 1) {
    return b;
  }
  const isGcd = a % b === 0;
  if (isGcd) {
    return b;
  }
  return getGcd(b, a % b);
};

const questionPair = () => {
  const firstNumber = getRandomNumber(40);
  const secondNumber = getRandomNumber(10);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(question, correctAnswer);
};

export default () => {
  const condition = 'What is the result of the expression?\n';
  return game(cons(condition, () => questionPair()));
};
