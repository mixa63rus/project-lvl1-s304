import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const correctAnswer = number => (isEven(number) ? 'yes' : 'no');

const getPair = () => {
  const number = getRandomNumber(100);
  const question = number;
  return cons(question, correctAnswer(number));
};

export default () => game(cons(descriptionGame, getPair));
