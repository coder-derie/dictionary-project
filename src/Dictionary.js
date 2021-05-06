import React, { useState }from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, Setword]= useState(null);

    function handleWord(event){
        event.preventDefault();
        alert(`Searching for the definition of ${word}`);
    }

    function handleChange(event){
        Setword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form className="form" onSubmit={handleWord}>
                <input type="search" onChange={handleChange}/>
            </form>
        </div>
    )
}