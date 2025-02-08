import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("https://api.jsonserve.com/Uw5CrX")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleSelect = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      const correctOption = q.options.find((opt) => opt.is_correct);
      if (answers[q.id] === correctOption?.description) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q.id} className="question-card">
            <h3>{q.description}</h3>
            {q.options.map((option) => (
              <label key={option.id} className="option-label">
                <input
                  type="radio"
                  name={q.id}
                  value={option.description}
                  checked={answers[q.id] === option.description}
                  onChange={() => handleSelect(q.id, option.description)}
                />
                {option.description}
              </label>
            ))}
          </div>
        ))
      ) : (
        <p>Loading questions...</p>
      )}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      {score !== null && <h2>Your Score: {score} / {questions.length}</h2>}
    </div>
  );
};

export default Quiz;
