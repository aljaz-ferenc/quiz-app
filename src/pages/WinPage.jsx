import React from 'react'
import {Link} from 'react-router-dom'
import './WinPage.css'

export default function WinPage() {
  return (
    <div className='win'>
      <p>Zmagal si in zaslužil 1.000.000€!!!</p>
      <Link to='/quiz' className='win__button'>Igraj ponovno!</Link>
    </div>
  )
}
