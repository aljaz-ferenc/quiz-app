import React from 'react'
import './LifeLines.css'
import { motion } from "framer-motion";

const lifeLineVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const containerVariants ={
  hide: {
    x: '100vw',
  },
  show: {
    x: 0,
    transition: {
      staggerChildren: .2,
      stiffness: 300,
      type:'spring',
      damping: 30
    }
  }
}

export default function LifeLines({selectLifeLineHandler, lifeLine}) {

  return (
    <motion.div
    variants={containerVariants}
    initial="hide"
    animate="show"
    className="life-lines">
          <motion.div     variants={containerVariants}
 title='Klic v sili' onClick={() => selectLifeLineHandler('klic')} className={lifeLine.klic === true ? "life-line" : 'life-line disabled'}></motion.div>
          <motion.div     variants={containerVariants}
 title='Glas ljudstva' onClick={() =>selectLifeLineHandler('glas')} className={lifeLine.glas === true ? "life-line" : 'life-line disabled'}></motion.div>
          <motion.div     variants={containerVariants}
 title='Polovička' onClick={() =>selectLifeLineHandler('polovicka')} className={lifeLine.polovicka === true ? "life-line" : 'life-line disabled'}></motion.div>
        </motion.div>
  )
}
