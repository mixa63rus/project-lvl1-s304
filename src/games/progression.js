import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'What number is missing in this progression?';
const progressionLength = 10;
const max = 20;
const maxStep = 5;
const minStep = 1;

const getProgression = () => {
  const firstElement = getRandomNumber(max);
  const step = getRandomNumber(maxStep, minStep);
  const progression = [firstElement];
  while (progression.length <= progressionLength) {
    progression.push(firstElement + (step * progressionLength));
  }
  return progression;
};

const questionAndAnswer = () => {
  const progression = getProgression();
  const indexOfAnswer = getRandomNumber(progressionLength);
  const answer = progression[indexOfAnswer];
  progression[indexOfAnswer] = '..';
  const question = progression.reduce((acc, element) => `${acc}${element} `, '');
  return cons(question, `${answer}`);
};

export default () => game(descriptionGame, questionAndAnswer);
