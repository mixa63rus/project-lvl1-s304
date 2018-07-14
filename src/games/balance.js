import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Balance the given number.';
const max = 5000;

const sumDigits = (number) => {
  const result = String(number).split('').map(Number).reduce((a, b) => a + b, 0);
  return result;
};

const concat = (emptyString, num, count) => {
  let str = emptyString;

  if (count > 0) {
    str += num;
    return concat(str, num, count - 1);
  }

  return str;
};

const getBalance = (number) => {
  const countDigits = String(number).length;
  const sum = sumDigits(number);

  if (sum % countDigits === 0) return concat('', sum / countDigits, countDigits);

  const number1 = Math.floor(sum / countDigits);
  const number2 = number1 + 1;
  let a;

  for (let i = 1; i < countDigits; i += 1) {
    a = concat('', number1, countDigits - i) + concat('', number2, i);
    if (sumDigits(Number(a)) === sum) return a;
  }

  return a;
};

const questionAndAnswer = () => {
  const number = getRandomNumber(max);
  const question = `${number}`;
  const answer = getBalance(number);
  return cons(question, `${answer}`);
};

export default () => game(descriptionGame, questionAndAnswer);
