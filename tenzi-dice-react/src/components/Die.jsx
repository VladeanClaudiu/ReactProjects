import React from "react";

export default function Die(props){
    const styles = {backgroundColor: !props.held? '#FFFFFF' : '#59E391'}

    return (
        
        <div style={styles} className="die-roll">
            <p  className="die-value">{props.value}</p>
        </div>
    )
}