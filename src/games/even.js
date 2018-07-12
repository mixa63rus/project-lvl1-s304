import { cons } from 'hexlet-pairs';
import game from '../game';

const getRandomNumber = max => Math.floor(Math.random() * max);

const isEven = number => number % 2 === 0;

const questionPair = () => {
  const question = getRandomNumber(100);
  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => {
  const condition = 'Answer "yes" if number even otherwise answer "no".\n';
  return game(cons(condition, () => questionPair()));
};
