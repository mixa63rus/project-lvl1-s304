import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isEven = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const gameRound = 3;
  for (let i = 0; i < gameRound; i += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
