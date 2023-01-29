import React from "react";
import "./Money.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    ease: "easeOut",
    transition: {
      opacity: {
        duration: 0.3,
      },
      y: {
        duration: 0.5,
      },
    },
  },
};

export default function Money() {
  const difficulty = useSelector((state) => state.difficulty.difficulty);
  const gameStatus = useSelector(state => state.difficulty.status)
  const money = ['1.000.000', '500.000', '250.000', '100.000', '50.000', '20.000', '10.000', '5.000', '2.500', '1.000',];
 
  function moneyClass(i, arr) {
    if(gameStatus === 'win'){
      return 'answered'
    }
    if(arr.length - i < difficulty){
      return 'answered';
    }else if(arr.length - i === difficulty){
      return 'current'
    }
  }

  return (
    <motion.div
      className="money__container"
      animate="visible"
      initial="hidden"
    >
      <div>LOGO</div>
      {money.map((item, i, arr) => (
        <motion.div variants={childVariants} className={moneyClass(i, arr)} key={i}>
          {item + '€'}
        </motion.div>
      ))}
    </motion.div>
  );
}