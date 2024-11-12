import React,{useState} from 'react';

function  CounterApp() 
{

   const [count,setCount]=useState(0);

   const  incrementcount=()=>{
          setCount(count+1)
   }

   const  decrementcount=()=>{
    setCount(count-1)
}

const  reset=()=>{
    setCount(0)
}
const incrementfive=()=>{
      for(let i=0;i<5;i++){
       setCount(prevcount=>prevcount+1);
      }
}
   return (
       <div>
        <h1>COUNTER APP</h1>
           <p>{count}</p>
             <button onClick={incrementcount}>increment </button>
             <button onClick={decrementcount}>decrement </button>
             <button onClick={reset}>Reset </button>
             <button onClick={incrementfive}>increment 5</button>
       </div>
   );    
}


export default CounterApp