import React, { useState }from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [word, setWord]= useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(){
         //api documentation can be found on Google Dictionary Api
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
        console.log(apiUrl);
    
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
       }

    function handleChange(event){
        setWord(event.target.value);
       
    }

    function load(){
        setLoaded(true);
        search();
    }
    
    if (loaded) {
       return (
        <div className="Dictionary">
            <section>
             <form className="form" onSubmit={handleSubmit}>
                <input type="search" defaultValue={props.defaultWord} className="search" onChange={handleChange}/>
                <input type="submit" value="Search" className="btn btn-secondary"/>
            </form>
            </section>
            <Results results={results}/>
        </div>
    )
    } else {
        load();
        return "Loading...";
        
    }
}