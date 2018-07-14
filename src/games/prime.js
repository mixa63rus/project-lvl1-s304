import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number prime otherwise answer "no".';
const min = 1;
const max = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (div) => {
    if (div > number / 2) {
      return true;
    }
    if (number % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  const div = 2;
  return iter(div);
};

const questionAndAnswer = () => {
  const number = getRandomNumber(max, min);
  const question = `Is this number prime? ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, `${answer}`);
};
  
  export default () => game(descriptionGame, questionAndAnswer);
  