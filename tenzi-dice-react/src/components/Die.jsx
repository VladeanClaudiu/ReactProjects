import React from "react";

export default function Die(props){
    console.log(props)
    return (
        
        <div className="die-roll">
            <p className="die-value">{props.value}</p>
        </div>
    )
}