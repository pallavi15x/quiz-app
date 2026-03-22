import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  </HashRouter>
);
<button
  onClick={() => navigate("/leaderboard")}
  className="bg-yellow-400 text-black px-6 py-2 rounded mt-3"
>
  View Leaderboard 🏆
</button>