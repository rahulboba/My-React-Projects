import React, { useEffect, useRef } from 'react';
import './Box.css';

export const Box = ({ value, onClick, index, focused, ...rest }) => {
  const boxRef = useRef(null);

  // Set focus on the box when the focused prop changes
  useEffect(() => {
    if (focused && boxRef.current) {
      boxRef.current.focus();
    }
  }, [focused]);

  const style = value === 'X' ? 'box x' : 'box o';
  const cellLabel = `${Math.floor(index / 3) + 1} row ${index % 3 + 1} col`;

  return (
    <button
      ref={boxRef} // Reference to the box element
      className={style}
      onClick={onClick}
      role='gridcell'
      aria-label={cellLabel + value}
      {...rest}
    >
      {value}
    </button>
  );
};
