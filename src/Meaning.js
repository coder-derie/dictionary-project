import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    console.log(props.meanings);
    return (
        <div className="Meaning">
            <h3>{props.meanings.partOfSpeech}</h3>
            {props.meanings.definitions.map(function (definition, index){
                return (
                    <div key={index}>
                       <div className="definition">{definition.definition}</div>
                       <div className="example">{definition.example}</div>
                       <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}