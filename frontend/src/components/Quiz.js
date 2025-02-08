import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";
import "./Quiz.css";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [leaderboard, setLeaderboard] = useState(
    JSON.parse(localStorage.getItem("leaderboard")) || []
  );

  <motion.div
    key={currentQuestion}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5 }}
  >
    <h3>{quizData.questions[currentQuestion].question}</h3>
  </motion.div>

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 4);
    } else {
      setScore((prevScore) => prevScore - 1);
    }

    setSelectedAnswer(isCorrect);
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
    } else {
      setQuizCompleted(true);
      updateLeaderboard(score);
    }
  };

  const updateLeaderboard = (finalScore) => {
    const newLeaderboard = [...leaderboard, { score: finalScore, date: new Date().toLocaleString() }];
    newLeaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard.slice(0, 5))); // Keep Top 5 Scores
    setLeaderboard(newLeaderboard.slice(0, 5));

    if (finalScore >= 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div className={`quiz-container ${darkMode ? "dark-mode" : ""}`}>
      {showConfetti && <Confetti />}

      <button className="toggle-dark" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {quizCompleted ? (
        <div className="results">
          <h2>Quiz Completed! 🎉</h2>
          <p>Total Questions: {quizData.questions.length}</p>
          <p>Final Score: {score}</p>
          <button onClick={() => window.location.reload()} className="restart-button">
            Restart Quiz
          </button>

          <div className="leaderboard">
            <h3>🏆 Leaderboard</h3>
            <ul>
              {leaderboard.map((entry, index) => (
                <li key={index}>
                  {index + 1}. {entry.score} Points - {entry.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <h2>{quizData.title}</h2>
          <div className="timer">⏳ {timeLeft} seconds left</div>
          <h3>{quizData.questions[currentQuestion].question}</h3>
          <div className="options">
            {quizData.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswer !== null
                    ? option.isCorrect
                      ? "correct"
                      : "wrong"
                    : ""
                  }`}
                onClick={() => handleAnswer(option.isCorrect)}
                disabled={selectedAnswer !== null}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} className="next-button">
            Next Question
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
