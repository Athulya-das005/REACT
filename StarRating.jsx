
import React, { useRef } from "react";

const StarRating=()=>{
  const starRef=useRef([])


  const handleRating=(index)=>{
    starRef.current.forEach((star,i)=>{
       star.style.color=i<=index ? 'gold' : 'darkgrey';
    });
  };
  return (
    <div>

      {[1,2,3,4,5].map((_,index)=>(
        <span
        key={index}
        ref={(e)=>starRef.current[index]=e}
        style={{fontSize:'2rem',color:'darkgrey',cursor:'pointer'}}
        onClick={()=>handleRating(index)}
        >
        {'\u2605'}
        </span>
      ))}
    </div>
  )
}
export default StarRating