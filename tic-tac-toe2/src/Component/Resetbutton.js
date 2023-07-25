import React from 'react'

import "./Resetbutton.css"

export const Resetbutton = ({resetBoard}) => {
  return (
    <div class= "restbutton">
    <button className="reset-btn" onClick={resetBoard}>
        Reset</button>
        </div>
  )
}