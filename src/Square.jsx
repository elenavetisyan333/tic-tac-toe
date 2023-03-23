import React, { useEffect, useState } from 'react'
import styles from './Square.module.css'

function Square({ squareId , mark, setMark, squares, setSquares, winner, setWinner }) {

  useEffect(()=>{
    findTheWinner();
    if(!squares.includes("")){
      setWinner("Draw")
    }
  },[squares])

  function findTheWinner(){
    const winningSets = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  
    winningSets.forEach((set)=>{
      if(squares[set[0]] === squares[set[1]] && squares[set[1]] === squares[set[2]] && squares[set[0]] !== "" && squares[set[1]] !== "" && squares[set[2]] !== "") {
        setWinner( squares[set[0]] );
      } 
    })
  }

  function takeId(id){

    if(squares[id] == "" && winner == ""){
      if(mark == "X"){
        setSquares( squares.map((square, index) => index == id ? square = "X" : square = square) );
        setMark("O");
      }
      else{
        setSquares( squares.map((square, index) => index == id ? square =  "O" : square = square) );
        setMark("X");
      }

      findTheWinner();
    }
  }

  return (
    <div className={styles.square} onClick={() => takeId(squareId)}> 
      <h2 style={{color: squares[squareId] == "X" ? "#A555EC" : "white", textShadow: squares[squareId] == "X" ? "0.7px 0.8px 1.1px white" : "0.7px 0.8px 1.1px #A555EC"}}> 
        {squares[squareId]}             
      </h2> 
    </div>
  )
}

export default Square