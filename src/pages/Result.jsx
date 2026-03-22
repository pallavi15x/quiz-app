import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect } from "react";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = 10; // total questions

  // 💾 Save score (only once)
  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("scores")) || [];
    const updated = [...prev, score]
      .sort((a, b) => b - a)
      .slice(0, 5);

    localStorage.setItem("scores", JSON.stringify(updated));
  }, [score]);

  // 🎯 Message
  let message = "";
  let emoji = "";

  if (score >= 8) {
    message = "Excellent!";
    emoji = "🔥";
  } else if (score >= 5) {
    message = "Good Job!";
    emoji = "👍";
  } else {
    message = "Try Again!";
    emoji = "😢";
  }

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white text-center px-4">

      {/* 🎉 Confetti */}
      {score >= 8 && <Confetti />}

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        🎯 Quiz Result
      </h1>

      {/* 🧠 Score */}
      <p className="text-5xl font-bold mb-2">
        {score} / {total}
      </p>

      {/* 📊 Percentage */}
      <p className="mb-4 text-lg">
        {percentage}% Score
      </p>

      {/* 📈 Progress Bar */}
      <div className="w-full max-w-xs bg-white/30 rounded h-3 mb-6">
        <div
          className="bg-white h-3 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* 💬 Message */}
      <p className="text-xl mb-6">
        {emoji} {message}
      </p>

      {/* 🔘 Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">

        <button
          onClick={() => navigate("/")}
          className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Play Again 🔁
        </button>

        <button
          onClick={() => navigate("/leaderboard")}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Leaderboard 🏆
        </button>

      </div>
    </div>
  );
}

export default Result;