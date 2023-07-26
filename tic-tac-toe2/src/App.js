// App.js
import React, {useEffect, useState} from "react";

import './App.css';
import { Board } from "./Component/Board"
import { Scoreboard } from "./Component/Scoreboard"
import { Resetbutton } from "./Component/Resetbutton";

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
  const [scores, setScores] = useState({xScore:0, oScore: 0});
  const [gameover, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      }else{
        return value;
      }
    })

    setBoard(updatedBoard);

    const winner= checkWinner(updatedBoard);
    if(winner){
      if (winner === "O"){
          let {oScore}= scores;
          oScore+=1;
          setScores({...scores,oScore})
      }else{
        let {xScore}= scores;
        xScore+=1;
        setScores({...scores,xScore})
      }
    }
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) =>{
    for (let i=0; i< WIN_CONDITION.length; i++) {
      const [x,y,z] = WIN_CONDITION[i];
      if (board[x]&& board[x] === board[y]&& board[y]=== board[z]){
        setGameOver(true)
        return board[x]; 
      }
    }
  }

  
  const [resultMessage, setResultMessage] = useState("");
  useEffect(() =>{
    const checkValue = board.every((value) => value !== null);
      if (gameover){
        const winner = checkWinner(board);
        setResultMessage(
          winner ? `Game Over. "${winner}" is WINNER!` : "Game Over. It's a draw!"
          );
        }if(!gameover && checkValue) {
          setResultMessage("Game Over. It's a draw!");
        }
      }, 
      [board, gameover]);
    
    const resetBoard = () =>{
      setResultMessage("")
      setGameOver(false);
      setBoard(Array(9).fill(null))
    }
    
    return (
    <div className="App">
      <Scoreboard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameover ? resetBoard : handleBoxClick}/>
       <Resetbutton resetBoard={resetBoard} />
      <div className="visually-hidden" aria-live="polite">
      {resultMessage}
      </div>
    
    </div>
  );
}

export default App;