import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props){
    console.log(props.results);

    if (props.results !== null) {
       return(
        <div className="Results">
            <section>
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index){
                return(
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                    </div>
                )
            }
            )}
            </section>
            {props.results.meanings.map(function (meaning, index){
                return (
                    <section key={index}>
                        <Meaning meanings={meaning} />
                    </section>
                );
            })}
        </div>
    ) 
    } else {
        return null;
    }
    
}