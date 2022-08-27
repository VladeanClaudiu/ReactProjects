import React from "react";

export default function Die(props){
    const {id, held, value, onHandle} = props;
    const styles = {backgroundColor: !held? '#FFFFFF' : '#59E391'}

    return (
        
        <div onClick={onHandle} style={styles} className="die-roll">
            <p className="die-value">{value}</p>
        </div>
    )
}