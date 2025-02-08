import React from "react";

const StartScreen = ({ startQuiz }) => {
  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz!</h1>
      <p>Test your knowledge with fun and challenging questions.</p>
      <button onClick={startQuiz} className="start-button">Start Quiz</button>
    </div>
  );
};

export default StartScreen;
