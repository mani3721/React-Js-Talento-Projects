import React from "react";

function WordCounter() {
    

    const wordCount=()=>{
        const Words=document.getElementById('word').value;
        var total=Words.length
    
       alert (`Total Number of Words ${total}`)
  
    
    }

    return (
        <>
        <h1>WORD COUNTER</h1>
        <textarea name="" id="word" cols="30" rows="10" placeholder="type here....."></textarea>
        <button onClick={wordCount}>Word COUNTER</button>
        
        </>
    )
}

export default WordCounter