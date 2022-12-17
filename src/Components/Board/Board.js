import { useCallback, useEffect, useState } from "react"
import './Board.css'
import Square from "./Square"
import checkWinner from "../../helpers/Moves"
import squares from "../../helpers/Squares"
import Player from "../Player/Player"
import Winner from "../Winner/Winner"

const Board=(props)=>{

    const [sq,setSquares] = useState(squares)
    const [player,setPlayer] = useState("X")
  

    const updateSquares=(id)=>{
        player === "X" ? setPlayer("O") : setPlayer("X")
        setSquares((elem)=>{
            return elem.map((i,index)=>{
              return  index === id ? player : i
            })
        })
    }

   const refresh = ()=>{
    setPlayer("X")
    setSquares((elem)=>{
        return elem.map((i)=>{
            return null
        })
    })

   }


   const WinnerMessage=(props)=>{
        return (
        <>
        <Winner>{props.children}</Winner>
        <div className="refresh"><button onClick={refresh}>REFRESH</button></div>
        </>
        )
   }

    return(

        <>
               <Player>{player}</Player>
                <div className="board">
                    {
                        sq.map((elem,index)=>{
                            return <Square key={index} value={elem} id={index} update={updateSquares} 
                            isDisabled={checkWinner(sq)!==null?true:false}></Square>
                        })
                    }
                </div>
                    {
                    checkWinner(sq) === "X" ? <WinnerMessage>X</WinnerMessage>: 
                                 checkWinner(sq) === "O" ? <WinnerMessage>O</WinnerMessage>:
                                 checkWinner(sq) === "DRAW" ? <WinnerMessage>DRAW</WinnerMessage>:

                                 null
                    }   
                
               
        </>
    )
}


export default Board