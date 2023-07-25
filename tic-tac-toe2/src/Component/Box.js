// Box.js
import React from 'react'

import "./Box.css"

export const Box = ({ value,onClick,index, ...rest }) => {
    const style= value === "X" ? "box x" : "box o";
    const cellLabel= value ? value : `${Math.floor(index/3)+ 1} row ${(index% 3 + 1)} col`;
    // const label= value ? value : `Box ${index + 1}`;
    
    return (
    <button className={style} onClick={onClick} {...rest} 
    roll="gridcell" aria-label={cellLabel}>
      {value}
      </button>
  );
};

