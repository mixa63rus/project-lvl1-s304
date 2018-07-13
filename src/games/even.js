import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = number => number % 2 === 0;
const correctAnswer = number => (isEven(number) ? 'yes' : 'no');

const getPair = () => {
  const number = getRandomNumber(100);
  const question = `Question: ${number}`;
  return cons(question, correctAnswer(question));
};

export default () => game(cons(descriptionGame, getPair));
