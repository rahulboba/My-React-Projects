import React from 'react'

import "./Resetbutton.css"

export const Resetbutton = ({resetBoard}) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>Reset</button>
  )
}