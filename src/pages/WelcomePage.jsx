import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { difficultyActions } from "../redux/difficulty/difficultySlice";
import { useSelector, useDispatch } from "react-redux";
import "./WelcomePage.css";

const containerVariants = {
  initial: {
    x: "-150vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-150vw",
  },
};

export default function WelcomePage() {
  const dispatch = useDispatch();

  function resetHandler() {
    dispatch(difficultyActions.reset());
  }

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      initial="initial"
      animate="animate"
      className="welcome"
    >
      <h1>Lepo je biti bogat</h1>
      <div className="welcome__rules">
        <h2>Pravila igre</h2>
        <p>
          Vsako vprašanje ima štiri ponujene odgovore (A, B, C in D), med
          katerimi je samo eden pravilen. Vsako vprašanje je vredno določen
          znesek denarja, ki ga tekmovalec osvoji, če pravilno odgovori.
        </p>
      </div>
      <div className="welcome__lifelines">
        <h2>Zasilni izhodi</h2>
        <p>
          Tekmovalec lahko kadarkoli med igro uporabi tri različne oblike
          pomoči:
        </p>
        <ul>
          <li>
            Polovička: računalnik odstrani dva (naključna) napačna odgovora, pri
            čemer pusti pravilen in preostali napačen odgovor.
          </li>
          <li>
            Klic v sili: tekmovalec lahko pokliče po telefonu prijatelja ali
            znanca in mu prebere vprašanje ter odgovore in vpraša za nasvet.
          </li>
          <li>
            Glas ljudstva: tekmovalec lahko za odgovor oz. mnenje vpraša
            občinstvo v studiu.
          </li>
        </ul>
      </div>
      <Link className="start-btn" to="/quiz" onClick={resetHandler}>
        Začni!
      </Link>
    </motion.div>
  );
}
