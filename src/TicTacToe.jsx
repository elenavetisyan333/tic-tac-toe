import React, { useState } from 'react'
import Square from './Square'
import './App.css'

function TicTacToe() {
    const [mark, setMark] = useState("X");
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState("");

    function restart(){
        setMark("X");
        setSquares(Array(9).fill(""));
        setWinner("");
    }

  return (
    <div className='content'>
        <h2>{ !winner ? `Your Turn: ${mark}` : "Game Over"}</h2>
        <div className='board'>
            <div className="row">
                <Square squareId={0} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={1} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={2} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
            </div>
            <div className="row">
                <Square squareId={3} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={4} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={5} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
            </div>
            <div className="row">
                <Square squareId={6} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={7} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
                <Square squareId={8} mark={mark} setMark={setMark} squares={squares} setSquares={setSquares} winner={winner} setWinner={setWinner} />
            </div>
        </div>
        {
            winner && (
                <div className='winnerPart'>
                    <h3>{winner != "Draw" ? `${winner} is the Winner!` : "Draw"}</h3>
                    <button onClick={restart}>Restart the Game</button>
                </div>
            )
        }
        <h3>

        </h3>
    </div>
  )
}

export default TicTacToe