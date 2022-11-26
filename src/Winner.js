import './Winner.css'
const Winner = (props)=>{
    return (
        <div className="result">
            <h2>{props.children}</h2>
        </div>
    )
}


export default Winner