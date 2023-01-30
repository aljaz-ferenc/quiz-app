import React from "react";
import "./Glas.css";
import { useSelector } from "react-redux";
import questions from "../questions/questions";
import { useRef } from "react";
import { motion } from "framer-motion";
import image from '../images/glas-active.webp'

export default function Glas() {
  const difficulty = useSelector((state) => state.difficulty.difficulty);
  const correctAnswer = questions[difficulty - 1].correct;
  const bar1Ref = useRef();
  const correctId = questions[difficulty - 1].answers.findIndex(
    (item) => item === correctAnswer
  );


  function createBar(height) {
    return {
      initial: {
        height: 0,
      },
      animate: {
        height: height,
        transition: {
          duration: 2,
        },
      },
    };
  }


  function getMinRand(){
      console.log('min')
    return Math.floor(Math.random() * (90 - 10 + 1) + 10)
  }

  function getMaxRand(){
    console.log('max')
    return Math.floor(Math.random() * (100 - 90 + 1) + 90)
  }

  //correct bar gets a height between 90 and 100%, the rest get between 10 and 90%
  const bar1 = createBar(`${correctId === 0 ? getMaxRand() : getMinRand()}%`);
  const bar2 = createBar(`${correctId === 1 ? getMaxRand() : getMinRand()}%`);
  const bar3 = createBar(`${correctId === 2 ? getMaxRand() : getMinRand()}%`);
  const bar4 = createBar(`${correctId === 3 ? getMaxRand() : getMinRand()}%`);



  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="chart__container"
    >
      <img className="chart__container-image" src={image} alt="" />
      <h2>GLAS LJUDSTVA</h2>
      <motion.div variants={bar1} ref={bar1Ref} className="chart__bar bar1">
        <span>A</span>
      </motion.div>
      <motion.div variants={bar2} className="chart__bar bar2">
      <span>B</span>
      </motion.div>
      <motion.div variants={bar3} className="chart__bar bar3">
      <span>C</span>
      </motion.div>
      <motion.div variants={bar4} className="chart__bar bar4">
      <span>D</span>
      </motion.div>
    </motion.div>
  );
}
