import { Component } from "react";
import "./Node.css"
export const Node=(props)=>{
    const {
        col,
        isFinish,
        isStart,
        isWall,
        mouseisPressed,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        row,
        st,fin,
        setStart,
        setFinish,
        chooseStart,
        chooseFinish,
        setChooseFinish,
        setChooseStart
      } = props;
      const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';
      
      return(
        <div   id={`node-${row}-${col}`} className={`node ${extraClassName}`}   onClick={()=>{
          if(!chooseStart && !chooseFinish) return;
          if(chooseStart){
            
            setStart(row,col)
            setChooseStart(false)
          }
          if(chooseFinish){

            setFinish(row,col)
            setChooseFinish(false)
          }
        }}>
            
        </div>
    )


}
    
    
        
    
