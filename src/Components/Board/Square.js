import { xColor,oColor,defaultColor } from "../../helpers/SquareColors"
import './Square.css'
const Square=({id,value,update,isDisabled})=>{


   const onClickHandler=()=>{
            update(id)
   }
        
   console.log("inse square")
    return(
        <button
        onClick={onClickHandler}
        style={value==null?defaultColor:value==="X"?xColor:oColor}
        className="square"
        disabled={isDisabled}
        >{value}</button>
    )
}


export default Square