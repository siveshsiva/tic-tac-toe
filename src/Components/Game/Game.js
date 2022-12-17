import Board from "../Board/Board"
import Title from "../Title/Title"
import './Game.css'

const Game=()=>{

    return(
        <div className="game">
            <Title></Title>
            <Board></Board>
       </div>
    )
}

export default Game