import React from "react";

const QuizResult = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="quiz-result">
      <h1>Quiz Completed!</h1>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizResult;