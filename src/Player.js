import './Player.css'
const Player=(props)=>{
    return(
        <div className='player'>
        <h2>PLAYER TURN: <span className='player_name'>{props.children}</span></h2>
        </div>
    )
}

export default Player