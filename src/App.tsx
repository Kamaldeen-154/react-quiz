import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which programming language is known as the backbone of web development?',
    options: ['JavaScript', 'Python', 'C++', 'Java'],
    correctAnswer: 'JavaScript'
  },
  {
    question: 'What does HTML stand for?',
    options: ['Hypertext Markup Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language', 'Hyperlink Text Markup Language'],
    correctAnswer: 'Hypertext Markup Language'
  }
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizEnded(false);
  };

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnded(true);
    }
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <div className="start-screen">
          <h1>Welcome to the Quiz Game</h1>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      ) : quizEnded ? (
        <div className="score-screen">
          <h1>Quiz Completed!</h1>
          <p>Your score is: {score}/{questions.length}</p>
          <button onClick={handleStartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-screen">
          <h1>{questions[currentQuestionIndex].question}</h1>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
