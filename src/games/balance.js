import { cons } from 'hexlet-pairs';
import game from '../game';

const descriptionGame = 'Balance the given number.';
const min = 1;
const max = 5000;

const iter = (acc, sum, count) => {
  if (count === 0) {
    return acc;
  }
  const number = (sum - (sum % count)) / count;
  return iter(acc + number, sum - number, count - 1);
};

const getBalance = (number) => {
  const array = `${number}`.split('');
  const length = array.length;
  const sum = array.reduce((acc, value) => acc + parseInt(value, 10), 0);
  return iter('', sum, length);
};

const questionAndAnswer = () => {
  const number = getRandomNumber(max, min);
  const question = `${number}`;
  const answer = getBalance(number);
  return cons(question, answer);
};

export default () => game(descriptionGame, questionAndAnswer);
