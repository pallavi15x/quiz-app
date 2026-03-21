import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Your Score</h1>
        <p className="text-xl mb-4">{score}</p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Result;