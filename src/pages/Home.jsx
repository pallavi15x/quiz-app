import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center px-4">

      {/* 🎯 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-5xl font-bold mb-4"
      >
        Quiz Master 🎯
      </motion.h1>

      {/* 📄 Subtitle */}
      <p className="mb-6 text-sm sm:text-lg">
        Choose your difficulty and test your knowledge!
      </p>

      {/* 🎮 Difficulty Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz", { state: { level: "easy" } })}
          className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Easy 😊
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz", { state: { level: "medium" } })}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Medium 😎
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz", { state: { level: "hard" } })}
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Hard 🔥
        </motion.button>

      </div>

      {/* 🌙 Dark Mode */}
      <button
        onClick={() => document.body.classList.toggle("dark")}
        className="mt-8 bg-black text-white px-4 py-2 rounded-lg"
      >
        Toggle Dark Mode 🌙
      </button>

    </div>
  );
}

export default Home;