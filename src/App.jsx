import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import WelcomePage from "./pages/WelcomePage";
import WinPage from "./pages/WinPage";
import OverPage from "./pages/OverPage";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function App() {
  const gameStatus = useSelector((state) => state.difficulty.status);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if(gameStatus === 'win'){
      navigate('/win')
    }
  }, [gameStatus])

  return (
    <div className="App">
      <h1 className="main-header">Lepo je biti bogat</h1>
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
