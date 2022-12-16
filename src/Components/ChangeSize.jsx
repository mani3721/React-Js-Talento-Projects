import React from "react";
import { useState } from "react";

const FontsizeChange=()=>{

    const [size, setSize]=useState()

   const changeFast =e=>{
        setSize(e.target.value)
    }

    return(
        <div>
            <h1 style={{fontSize:`${size}px`}}>Talento Task</h1>
            <h2>{size}Px</h2>
             <input type="range" min="0" max="100" value={size}  onChange={changeFast}/>
        </div>
    )
}

export default FontsizeChange