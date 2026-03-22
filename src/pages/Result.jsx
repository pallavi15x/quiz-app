import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = 10; // number of questions
  const percentage = (score / total) * 100;

  // 🧠 Smart message
  const getMessage = () => {
    if (percentage >= 80) return "Excellent 🔥";
    if (percentage >= 50) return "Good Job 👍";
    return "Keep Practicing 💪";
  };

  // 🏆 Save score
  const previousScores = JSON.parse(localStorage.getItem("scores")) || [];

const newScores = [...previousScores, score];

// sort highest first
newScores.sort((a, b) => b - a);

// keep top 5
localStorage.setItem("scores", JSON.stringify(newScores.slice(0, 5)));

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">

      {/* 🎉 Confetti if score high */}
      {percentage >= 70 && <Confetti />}

      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-96">
        
        <h1 className="text-2xl font-bold mb-4">Quiz Result 🎯</h1>

        <p className="text-lg mb-2">
          Your Score: <span className="font-bold">{score} / {total}</span>
        </p>

        <p className="text-lg mb-2">
          Percentage: <span className="font-bold">{percentage}%</span>
        </p>

        <h2 className="text-xl font-semibold mb-4">
          {getMessage()}
        </h2>

        {/* 🔁 Restart */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Play Again
        </button>
        <button
  onClick={() => navigate("/leaderboard")}
  className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
>
  View Leaderboard 🏆
</button>

      </div>
    </div>
  );
}

export default Result;