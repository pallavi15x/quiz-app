import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import questions from "../data/questions";

function Quiz() {
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
  }, [time]);

  // 👉 Next question
  const handleNext = () => {
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setTime(15);
    } else {
      navigate("/result", { state: { score } });
    }
  };

  // 👉 Answer click
  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1); // better way
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

        {/* ⏱️ Timer */}
        <p className="text-red-500 font-bold mb-2 text-sm sm:text-base">
          Time Left: {time}s
        </p>

        {/* 📊 Progress Bar */}
        <div className="w-full bg-gray-200 h-2 mb-4 rounded">
          <div
            className="bg-green-500 h-2 rounded transition-all duration-500"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

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

      </motion.div>
    </div>
  );
}

export default Quiz;