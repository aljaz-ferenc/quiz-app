import React from "react";
import "./KlicVSili.css";
import { useSelector } from "react-redux";
import questions from "../questions/questions";
import image from "../images/klic-active.webp";
import { motion } from "framer-motion";

export default function KlicVSili({ activeLifeLine }) {
  const difficulty = useSelector((state) => state.difficulty.difficulty);
  const correctAnswer = questions[difficulty - 1].correct;

  return (
    <div className="klic__container">
      <p className="klic__text">
        &ldquo;Pozdravljen, hmm... Nisem čisto prepričan, amapk mislim, da je
        pravilen odgovor{" "}
        
          <span>{correctAnswer}</span>
       
        .&rdquo;{" "}
      </p>
      <img
        className="klic__image"
        src={image}
        alt=""
      />
    </div>
  );
}
