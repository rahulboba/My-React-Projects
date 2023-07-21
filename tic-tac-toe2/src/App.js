import React, {useState} from "react";

import './App.css';

import { Board } from './Component/Board';

function App() {

  const WIN_CONDITION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === false ? "X" : "O";
      }else{
        return value;
      }
    })

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  }

  // const checkWinner = {
  //   for 
  // }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>
       
    </div>
  );
}

export default App;
