import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'
import "./styles.css";

const StartRating = ({nofOfStart=5}) => {

  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);

  function handleClick(i){
    setRating(i); 
  }

  function handleMouseEnter(i){
    setHover(i);
  }

  function handleMouseLeave(){
    setHover(rating);
  }

  return <div 
        style={{
          width:"100vw",
          display:"flex",
          marginTop:"100px",
          marginBottom:"100px",
          justifyContent: "center",
        }}
        >
    {
      [...Array(nofOfStart)].map((_,index)=>{
        index+=1

        return <FaStar
        key={index}
        className={index<=(hover||rating)?'active':'inactive'}
        onClick={()=>handleClick(index)}
        onMouseEnter={()=>handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave(index)}
        size={40}
        />
      })
    }
  </div>
};

export default StartRating;
