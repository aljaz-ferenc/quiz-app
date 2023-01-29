import React, { useState } from "react";
import questions from "../questions/questions";
import { useDispatch, useSelector } from "react-redux";
import { difficultyActions } from "../redux/difficulty/difficultySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Answers.css";
import { motion } from "framer-motion";

const answerVariants ={
  hide:{
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }

  }
}

export default function Answers({ activeLifeLine }) {
  const difficulty = useSelector((state) => state.difficulty.difficulty);
  const gameStatus = useSelector((state) => state.difficulty.status);
  const [isCorrect, setIsCorrect] = useState(null);
  const [polovicka, setPolovicka] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const answers = questions[difficulty - 1].answers;
  const correctAnswer = questions[difficulty - 1].correct;
  const correctId = answers.findIndex((item) => item === correctAnswer);
  const answerLetters = ['A', 'B', 'C', 'D']

  useEffect(() => {
    if (activeLifeLine === "polovicka") {
      const randomNums = [];

      while (randomNums.length < 2) {
        const randomNum = Math.floor(Math.random() * 3);
        if (
          randomNum === correctId ||
          randomNums.some((num) => num === randomNum)
        ) {
          continue;
        } else {
          randomNums.push(randomNum);
        }
      }
      setPolovicka(randomNums);
    }
  }, [activeLifeLine]);

  function checkAnswer(e) {
    if (e.target.textContent === "") return;
    if (String(e.target.textContent).includes(String(correctAnswer))) {
      setIsCorrect(+e.target.id);

      setTimeout(() => {
        handleRightAns();
        setIsCorrect(null);
        setPolovicka([]);
      }, 1500);
    } else {
      e.target.classList = "wrong-answer answer";
      setIsCorrect(correctId);
      setTimeout(() => {
        navigate('/over')
        handleWrongAns();
        setPolovicka([]);
      }, 1500);
    }
  }

  function handleRightAns() {
    dispatch(difficultyActions.nextDifficulty());
  }

  function handleWrongAns() {
    dispatch(difficultyActions.gameOver());
  }

  return (
    <motion.div 
      className="answers__container"
      variants={answerVariants}
      initial='hide'
      animate='show'
    >
      {answers.map((answer, i) => (
        <motion.div
          key={i}
          id={i}
          onClick={checkAnswer}
          className={i === isCorrect ? "correct-answer answer" : "answer"}
        >
          {polovicka.some((num) => num === i) 
          ? null 
          : answerLetters[i]+ ': ' + answer}
        </motion.div>
      ))}
    </motion.div>
  );
}
