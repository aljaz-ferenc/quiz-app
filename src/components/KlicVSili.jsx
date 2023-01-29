import React from 'react'
import './KlicVSili.css'
import { useSelector } from 'react-redux'
import questions from '../questions/questions'

export default function KlicVSili({activeLifeLine}) {
    const difficulty = useSelector(state => state.difficulty.difficulty)
    const correctAnswer = questions[difficulty - 1].correct

    return (
    <div className='klic__container'>
        <p className='klic__text'>&ldquo;Pozdravljen, hmm... Nisem čisto prepričan, amapk mislim, da je pravilen odgovor <strong><em>{correctAnswer}</em></strong>.&rdquo; </p>
    </div>
  )
}