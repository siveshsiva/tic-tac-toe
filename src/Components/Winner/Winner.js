import './Winner.css'
const Winner = (props)=>{

   
    return (
        <>
        <div className={props.children==="DRAW"?"draw":"result"}>

            {props.children==="DRAW"? <h2><span className='draw_player_name'>MATCH IS DRAW</span></h2>: 
            <h2><span className='player_name'>{props.children}</span> WON THE MATCH</h2>
    }
        </div>
        </>
    )
}

export default Winner