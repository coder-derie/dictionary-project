import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props){
    console.log(props.results);

    if (props.results !== null) {
       return(
        <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index){
                return(
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                    </div>
                )
            }
            )}
            
            {props.results.meanings.map(function (meaning, index){
                return (
                    <div key={index}>
                        <Meaning meanings={meaning} />
                    </div>
                );
            })}
        </div>
    ) 
    } else {
        return null;
    }
    
}