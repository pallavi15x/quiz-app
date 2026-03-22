import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate();

  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-yellow-400 to-red-500">
      
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        
        <h1 className="text-2xl font-bold mb-4">🏆 Leaderboard</h1>

        {scores.length === 0 ? (
          <p>No scores yet</p>
        ) : (
          <ul>
            {scores.map((s, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 mb-2 rounded flex justify-between"
              >
                <span>#{index + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default Leaderboard;