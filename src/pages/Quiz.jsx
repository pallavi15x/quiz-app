import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import allQuestions from "../data/questions";

// 🎯 Random questions
const questions = [...allQuestions]
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

function Quiz() {
  const location = useLocation();
  const level = location.state?.level || "easy";

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  // ⏱️ Timer logic
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNext();
    }
  }, [time, current]);

  // 👉 Next question
  const handleNext = () => {
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setTime(15);
    } else {
      navigate("/result", { state: { score } });
    }
  };

  // 👉 Answer click
  const handleAnswer = (option) => {
    if (selected !== null) return; // 🚫 prevent double click

    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-purple-500 to-blue-500">

      <motion.div
        key={current}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-md text-center"
      >

        {/* 🎯 Level */}
        <p className="text-xs text-gray-500 mb-1">
          Level: {level.toUpperCase()}
        </p>

        {/* ⏱️ Timer */}
        <p className={`font-bold mb-2 text-sm sm:text-base ${
          time <= 5 ? "text-red-700 animate-pulse" : "text-red-500"
        }`}>
          Time Left: {time}s
        </p>

        {/* 📊 Progress */}
        <div className="w-full bg-gray-200 h-2 mb-4 rounded">
          <div
            className="bg-green-500 h-2 rounded transition-all duration-500"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* 🔥 Score */}
        <p className="text-sm font-bold mb-1">
          Score: {score}
        </p>

        {/* Question count */}
        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          Question {current + 1} / {questions.length}
        </p>

        {/* Question */}
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          {questions[current].question}
        </h2>

        {/* Options */}
        {questions[current].options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(opt)}
            className={`block w-full p-3 mb-2 rounded transition text-white text-sm sm:text-base
              ${
                selected
                  ? opt === questions[current].answer
                    ? "bg-green-500"
                    : opt === selected
                    ? "bg-red-500"
                    : "bg-gray-400"
                  : "bg-blue-500 hover:bg-blue-600"
              }
            `}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}

        {/* ⏭️ Skip Button */}
        <button
          onClick={handleNext}
          className="mt-3 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Skip ⏭️
        </button>

      </motion.div>
    </div>
  );
}

export default Quiz;