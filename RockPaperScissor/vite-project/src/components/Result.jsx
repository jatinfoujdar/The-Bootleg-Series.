import React from 'react';

const Result = ({ userChoice, computerChoice, result, resetGame }) => {
  return (
    <div>
      <h2>You chose {userChoice}</h2>
      <h2>Computer chose {computerChoice}</h2>
      <h2>{result}</h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Result;
