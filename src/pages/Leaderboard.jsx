import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate();
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">

      <h1 className="text-3xl font-bold mb-4">🏆 Leaderboard</h1>

      {scores.map((s, i) => (
        <p key={i}>{i + 1}. {s}</p>
      ))}

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-white text-black px-6 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
}

export default Leaderboard;