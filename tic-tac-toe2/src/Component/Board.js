import React, { useEffect, useState } from 'react';
import { Box } from './Box';
import './Board.css';

export const Board = ({ board, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle arrow key navigation
  const handleArrowNavigation = (event) => {
    const key = event.key;
    let nextIndex;

    switch (key) {
      case 'ArrowUp':
        nextIndex = currentIndex - 3;
        break;
      case 'ArrowDown':
        nextIndex = currentIndex + 3;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex + 1;
        break;
      default:
        return;
    }

    if (nextIndex >= 0 && nextIndex < board.length) {
      setCurrentIndex(nextIndex);
    }
  };

  // Set up event listener for arrow key navigation
  useEffect(() => {
    document.addEventListener('keydown', handleArrowNavigation);
    return () => {
      document.removeEventListener('keydown', handleArrowNavigation);
    };
  }, [currentIndex]);

  return (
    <div className='board' role='grid' aria-label='table 3 row and 3 column'>
      {board.map((value, idx) => {
        return (
          <Box
            key={idx}
            value={value}
            index={idx}
            focused={currentIndex === idx} // Pass a "focused" prop to Box component
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};
