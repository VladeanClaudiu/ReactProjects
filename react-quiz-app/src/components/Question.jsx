import React from "react";

export default function Question(props) {
    const arrayAnswers = Object.entries(props.answers[0]);
    const arrayTest = arrayAnswers.map(item=> {
        return  item[1] 
    })

   
    const Options = arrayTest.map(item => {
        return(
            <div className="option">
                    <p>{item.answer}</p>
                </div>
        )
    })
    
    return(
        <section className="question">
             <h3 className="question-head">{props.questionAsked}</h3>
            <div onClick={props.handleClick} className="question-options">
                {Options}
            </div>
        </section>
    )
}