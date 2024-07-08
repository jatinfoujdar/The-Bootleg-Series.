import React, { useState } from 'react';
import Result from './Result';

const choices = ['rock', 'paper', 'scissors']; // corrected 'scissors'

const Game = () => {
  const [userChoice, setUserChoice] = useState(null); // initialized with null
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('Draw');
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('Computer Wins!');
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      {userChoice && computerChoice && result && ( // Ensure all states are not null before rendering Result
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default Game;
