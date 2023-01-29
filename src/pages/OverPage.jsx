import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './OverPage.css'
import { useDispatch } from 'react-redux';
import { difficultyActions } from '../redux/difficulty/difficultySlice';
import { motion } from 'framer-motion'


const containerVariants ={
  initial: {
      x: '-150vw',
  },
  animate: {
      x: 0
  },
  exit: {
      x: '-150vw',
  }
}

export default function OverPage() {
  const difficulty = useSelector(state => state.difficulty.difficulty)
  const money = ['1.000.000', '500.000', '250.000', '100.000', '50.000', '20.000', '10.000', '5.000', '2.500', '1.000',];
  const dispatch = useDispatch()

  function playAgainHandler(){
    dispatch(difficultyActions.reset())
  }

  return (
    <motion.div 
    className='over'
    variants={containerVariants}
    exit='exit'
    initial="initial"
    animate="animate"
    >
    <div className='over__text'>
      Priigral si si {money.reverse()[difficulty - 2] || '0'}€. Poskusi znova in postani milijonar!
    </div>
    <Link to='/quiz' onClick={playAgainHandler} className='over__button'>Igraj ponovno!</Link>
    </motion.div>
  )
}
