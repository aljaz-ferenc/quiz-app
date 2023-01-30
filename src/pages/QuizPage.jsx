import React, { useState } from "react";
import "./QuizPage.css";
import LifeLines from "../components/LifeLines";
import Money from "../components/Money";
import { useSelector, useDispatch } from "react-redux";
import { difficultyActions } from "../redux/difficulty/difficultySlice";
import { useEffect } from "react";
import questions from "../questions/questions";
import Answers from "./Answers";
import KlicVSili from "../components/KlicVSili";
import Glas from "../components/Glas";

export default function QuizPage() {
  const difficulty = useSelector((state) => state.difficulty.difficulty);
  const gameStatus = useSelector((state) => state.difficulty.status);
  const [activeLifeLine, setActiveLifeLine] = useState(null);
  const question = questions[difficulty - 1].question;
  const dispatch = useDispatch();

  //initial state
  const [lifeLine, setLifeLine] = useState({
    klic: true,
    glas: true,
    polovicka: true,
  });

  //set currently active and used/available life lines
  function selectLifeLineHandler(value) {
    if (activeLifeLine !== null) return;
    switch (value) {
      case "klic":
        if (lifeLine.klic === true) {
          setActiveLifeLine(value);
          setLifeLine((prevState) => ({ ...prevState, klic: false }));
        } else {
          setActiveLifeLine(null);
          return;
        }
        break;
      case "glas":
        if (lifeLine.glas === true) {
          setActiveLifeLine(value);
          setLifeLine((prevState) => ({ ...prevState, glas: false }));
        } else {
          setActiveLifeLine(null);
          return;
        }
        break;
      case "polovicka":
        if (lifeLine.polovicka === true) {
          setActiveLifeLine(value);
          setLifeLine((prevState) => ({ ...prevState, polovicka: false }));
        } else {
          setActiveLifeLine(null);
          return;
        }
        break;
    }
  }

  //reset active life line
  useEffect(() => {
    setActiveLifeLine(null);
  }, [difficulty, setActiveLifeLine]);

  useEffect(() => {
    if (gameStatus === "win") {
      setTimeout(() => {
        dispatch(difficultyActions.reset());
      }, 500);
    }
  }, [gameStatus]);

  return (
    <>
      <div className="quiz">
        <div className="main__containter">
          <LifeLines
            lifeLine={lifeLine}
            selectLifeLineHandler={selectLifeLineHandler}
          />
          <div className="question">{question}</div>
          <Answers activeLifeLine={activeLifeLine} />
        </div>
        <Money />
      </div>
      {activeLifeLine === "klic" && (
        <KlicVSili activeLifeLine={activeLifeLine} />
      )}
      {activeLifeLine === "glas" && <Glas activeLifeLine={activeLifeLine} />}
    </>
  );
}
