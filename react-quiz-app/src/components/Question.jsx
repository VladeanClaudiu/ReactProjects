import React from "react";

export default function Question(props) {

    const array = (props.answers).sort((a,b) => 0.5 - Math.random());
    console.log(array)
    
    const Options = array.map(item => {
        return(
            <div className="option">
                    <p>{item.answer}</p>
                </div>
        )
    })
    
    return(
        <section className="question">
             <h3 className="question-head">{props.questionAsked}</h3>
            <div className="question-options">
                {Options}
            </div>
        </section>
    )
}