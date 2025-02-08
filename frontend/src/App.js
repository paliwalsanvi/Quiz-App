import React, { useState } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import "./style/styles.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="app-container">
      {!quizStarted ? (
        <StartScreen startQuiz={() => setQuizStarted(true)} />
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
