import React, { useState }from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [word, Setword]= useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
    }
    
    function handleWord(event){
        event.preventDefault();
        //api documentation can be found on Google Dictionary Api
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
        console.log(apiUrl);
    }

    function handleChange(event){
        Setword(event.target.value);
       
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