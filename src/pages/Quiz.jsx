import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import questions from "../data/questions";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (option) => {
    let newScore = score;

    if (option === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/result", { state: { score: newScore } });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-lg w-96 text-center"
      >
        {/* Question count */}
        <p className="text-sm text-gray-500 mb-2">
          Question {current + 1} / {questions.length}
        </p>

        {/* Question */}
        <h2 className="text-xl font-bold mb-4">
          {questions[current].question}
        </h2>

        {/* Options */}
        {questions[current].options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(opt)}
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white p-2 mb-2 rounded transition"
          >
            {opt}
          </button>
        ))}
      </motion.div>
    </div>
  );

  
}

export default Quiz;