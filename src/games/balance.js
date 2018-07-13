import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Balance the given number.';
const max = 5000;

const iter = (acc, sum, count) => {
  if (count === 0) {
    return acc;
  }
  const number = (sum - (sum % count)) / count;
  return iter(acc + number, sum - number, count - 1);
};

const getBalance = (number) => {
  const arrayOfDigits = `${number}`.split('');
  const countDigits = arrayOfDigits.length;
  const sum = arrayOfDigits.reduce((acc, value) => acc + Number(value), 0);
  return iter('', sum, countDigits);
};

const questionAndAnswer = () => {
  const number = getRandomNumber(max);
  const question = `${number}`;
  const answer = getBalance(number);
  return cons(question, `${answer}`);
};

export default () => game(descriptionGame, questionAndAnswer);
