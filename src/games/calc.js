import { cons } from 'hexlet-pairs';
import game from '../game';
import getRandomNumber from '../utils';

const descriptionGame = 'Find the greatest common divisor of given numbers.\n';
const operations = ['+', '-', '*'];
const firstNumber = getRandomNumber(40);
const secondNumber = getRandomNumber(10);

const getPair = () => {
  const operation = operations[getRandomNumber(3)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  switch (operation) {
    case '+':{
      const answer = firstNumber + secondNumber;
      return cons(question, `${answer}`);
    }
    case '-': {
      const answer = firstNumber - secondNumber;
      return cons(question, answer);
    }
    default: {
    const answer = firstNumber * secondNumber;
    return cons(question, answer);
    }
  }
};

export default () => game(cons(descriptionGame, getPair));
