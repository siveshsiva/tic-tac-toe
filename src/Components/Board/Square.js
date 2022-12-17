import { motion } from "framer-motion"
import { xColor,oColor,defaultColor } from "../../helpers/SquareColors"
import './Square.css'
const Square=({id,value,update,isDisabled})=>{


   const onClickHandler=()=>{
            update(id)
   }
        
    return(
      
        <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 9 }}
        >
        <button
        onClick={onClickHandler}
        style={value==null?defaultColor:value==="X"?xColor:oColor}
        disabled={isDisabled}
        className="square"
        >{value}</button>
        </motion.div>
    )
}


export default Square