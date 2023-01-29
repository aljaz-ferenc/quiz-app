import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import WelcomePage from "./pages/WelcomePage";
import WinPage from "./pages/WinPage";
import OverPage from "./pages/OverPage";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const gameStatus = useSelector((state) => state.difficulty.status);
  const location = useLocation();

  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="/over" element={<OverPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
