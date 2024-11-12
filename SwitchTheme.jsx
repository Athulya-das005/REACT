

import React,{useState} from 'react'


function SwitchTheme(){
  const [darkTheme,setDarkTheme]=useState(false);

 const toggletheme = () => {
  setDarkTheme(!darkTheme);
 }
return(
  <div style={{
    backgroundColor:darkTheme?'black':'white',
    color: darkTheme ?'white':'black',
    height:'80vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   
    }}
    >

<button onClick={toggletheme}>switch Theme</button>
  </div>
) 
}
export default SwitchTheme;




