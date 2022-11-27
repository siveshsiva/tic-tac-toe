import { isDisabled } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import './Board.css'
import winning_moves from "./Game"
const Board=({checkResult,checkPlayer})=>{

    const [squares,setSquares] = useState(Array(9).fill(null))
    const [output,setOutput] = useState("X")
    const [isValid,setValid] = useState(false)
    


    const defaultColor = {
        backgroundColor: "white"
    }

    const xColor = {
        backgroundColor: "rgb(223, 71, 99)"
    }

    const oColor = {
        backgroundColor: "rgb(41, 175, 82)"
    }

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

   

    const Square=({id,value})=>{
        return <button 
        className="button" 
        onClick={()=>onClickHandle(id,value)} 
        disabled={isValid} 
        style={value==null?defaultColor:value==="X"?xColor:oColor}
        >{value}</button>
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