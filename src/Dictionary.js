import React, { useState }from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [word, setWord]= useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
         //api documentation can be found on Google Dictionary Api
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        
        let pexelsApiKey = "563492ad6f9170000100000168c545eb1716465585056ea9127bb4bc";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse);
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
            <Photos photos={photos} />
        </div>
    )
    } else {
        load();
        return "Loading...";
        
    }
}