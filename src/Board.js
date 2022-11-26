import { isDisabled } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import './Board.css'
import winning_moves from "./Game"
const Board=({checkResult,checkPlayer})=>{

    const [squares,setSquares] = useState(Array(9).fill(null))
    const [output,setOutput] = useState("X")
    const [isValid,setValid] = useState(false)
    

    const onClickHandle=(id,value)=>{
       
        if(squares[id]!=null)
        {
            return
        }

        if(output === "X")
        {
            setOutput("O")
            checkPlayer("O")
        }
        else{
            setOutput("X")
            checkPlayer("X")
        }

        setSquares((elem)=>{
           return elem.map((i,index)=>{
                if(index===id)
                {
                    return i=output
                }
                else{
                    return i
                }
            })
        })
    }

    useEffect(
        ()=>{
          winning_moves.forEach(

            (elem)=>{
                let [a,b,c] = elem
                if(squares[a]==="X" && squares[b]==="X" && squares[c]==="X")
                {
                    const message = "X WON THE MATCH"
                    setValid(true)
                    checkResult(message)

                }
                else if(squares[a]==="O" && squares[b]==="O" && squares[c]==="O")
                {
                    const message = "O WON THE MATCH"
                    setValid(true)
                    checkResult(message)
                }
                else if(!squares.includes(null))
                {
                    const message = "DRAW"
                    setValid(true)
                    checkResult(message)
                }
            }
          )
        },[squares]
    )

   

    const Square=(props)=>{
        return <button className="button" onClick={()=>onClickHandle(props.id,props.value)} disabled={isValid}>{props.value}</button>
    }

    return(

        <div className="square">
            {
                squares.map((elem,index)=>{
                    return <Square key={index} value={elem} id={index}></Square>
                })
            }
        </div>

    )
}


export default Board