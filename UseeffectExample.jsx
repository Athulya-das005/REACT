// import React, { useEffect, useState } from "react";

// const UseeffectEx2 = ()=>{

//     const [quotes, setQuotes] = useState([])
 
//     useEffect(()=>{
//         fetch("https://dummyjson.com/quotes")
//         .then((res)=> res.json())
//         .then((obj)=> {
//            let result=obj.quotes.splice(0,10)
           
//               setQuotes(result);

//         })
//     },[])
    
//     return(
//         <>
//             <h1 >Fetch Quotes</h1>
//             <div>

//             {quotes.map((x)=>{
//                 return <h4 key={x.id}>{x.quote}</h4>
//             })}
//             </div>
//         </>
//     )
// }

// export default UseeffectEx2;


import React, { useState } from 'react'
import { useEffect } from 'react'

const UseeffectExample = () => {

    const [quotes,setQuotes]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
                 .then((res)=> res.json())
               .then((obj)=> {
                      let result=obj.quotes.splice(0,10)
                          setQuotes(result);
               })
    },[])
  return (
    <div>

        <h1>quotes</h1>
    {quotes.map((x)=>{
           return <h4 key={x.id}>{x.quote}</h4>
    }
    )}
    </div>
  )
}

export default UseeffectExample
