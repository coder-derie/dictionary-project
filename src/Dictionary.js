import React, { useState }from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, Setword]= useState(null);

    function handleWord(event){
        event.preventDefault();
        alert(`Searching for the definition of ${word}`);
    }

    function handleChange(event){
        Setword(event.target.value);
        let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello"
    }
    
    return (
        <div className="Dictionary">
            <form className="form" onSubmit={handleWord}>
                <input type="search" onChange={handleChange}/>
                <input type="submit" value="Search" className="btn btn-primary"/>
            </form>
        </div>
    )
}