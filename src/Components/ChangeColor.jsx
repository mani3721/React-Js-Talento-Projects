import React from "react";
import { useState } from "react";

const ChangeColor=()=>{
    const [backgroundColor, setBackgroundColor]=useState('blue')
   const[color, setColor]=useState('white')

   const changeColors =e=>{setColor(e.target.value)}

   const changeBgcolor=e=>{setBackgroundColor(e.target.value)}

   return(
    <div>
        <h1>Talento Color Changer Task</h1>
        <h1 style={{backgroundColor:`${backgroundColor}`,color:`${color}`}}>Talento Color Changer Task</h1>
       <label>Text Color</label>
       <input type="color" name="color" value={color} onChange={changeColors}/>
       <label htmlFor="">Background Color</label>
       <input type="color" name="bgcolor" value={backgroundColor} onChange={changeBgcolor}/>
      
    </div>
   )
}

export default ChangeColor