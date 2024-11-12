
import React, { useState } from 'react'


const SimpleForm = () => {

    const [inputvalue,setInputvalue]=useState('')

    const handlechange=(event)=>{
           setInputvalue(event.target.value)
    }
  return (
    <div>
         <form>
              <label>
                <input type="text"
                    value={inputvalue}
                    onChange={handlechange}
                    placeholder='text anything'/>
                  
              </label>
              </form>
         <p>you typed:{inputvalue}</p>
    </div>
  )
}

export default SimpleForm



