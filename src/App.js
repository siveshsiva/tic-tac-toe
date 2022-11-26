import './App.css';

import Board from './Board';
import Title from './Title';
import Winner from './Winner';
import { useState } from 'react';
import Player from './Player';


const App=()=>{


  const [winnerAnnounced,setWinnerAnnounced] = useState(false)
  const [message,setMessage] = useState('')
  const [player,setPlayer] = useState("X")

  const checkWinnerAnnounced=(message)=>{
    setMessage(message)
    setWinnerAnnounced(true)
  }

  const whichPlayer=(player)=>{
    setPlayer(player)
  }

  return(
   
    <div className='App'>
    <Title></Title>
    <Player>{player}</Player>
    <Board checkResult={checkWinnerAnnounced} checkPlayer={whichPlayer}></Board>
    {winnerAnnounced && <Winner>{message}</Winner>}
    </div>
  )
}


export default App