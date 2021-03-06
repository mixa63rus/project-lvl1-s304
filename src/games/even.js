import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';
const min = 1;
const max = 100;
const isEven = number => number % 2 === 0;
const correctAnswer = number => (isEven(number) ? 'yes' : 'no');

const questionAndAnswer = () => {
  const number = getRandomNumber(max, min);
  const question = `Question: ${number}`;
  return cons(question, correctAnswer(number));
};

export default () => game(descriptionGame, questionAndAnswer);
