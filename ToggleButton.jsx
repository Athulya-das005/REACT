import { useState } from "react";


function ToggleButton() {
  const [ison,setbutton]=useState(false)
    const displaystatus=()=>{
           setbutton(prevstate=>!prevstate)
    }


  return (
    <div>
        <h3>toggle button is:{ison ?'on':'off'}</h3>
        <button  onClick={displaystatus}>{ison?'off':'on'}</button>
    </div>
  )
}

export default ToggleButton




// (from chatgpt:-)
// import React, { useState } from 'react';

// const ToggleButton = () => {
//   // State to track whether the button is ON or OFF
//   const [isOn, setIsOn] = useState(false);

//   // Function to toggle the state
//   const toggleButton = () => {
//     setIsOn(prevstate=>!prevstate);
//   };

//   return (
//     <div>
     
//       <p>The button is currently: {isOn ? 'OFF' : 'ON'}</p>
//       <button onClick={toggleButton}>{isOn ? 'ON' : 'OFF'}</button>
//     </div>
//   );
// };

// export default ToggleButton;




