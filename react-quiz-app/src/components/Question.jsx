import React from "react";

export default function Question(props) {
    return(
        <section className="question">
             <h3 className="question-head">{props.questionAsked}</h3>
            <div className="question-options">
                <div className="option">
                    <p>Option 1</p>
                </div>
                <div className="option">
                    <p>Option 2</p>
                </div>
                <div className="option">
                    <p>Option 3</p>
                </div>
                <div className="option">
                    <p>Option 4</p>
                </div>
            </div>
        </section>
    )
}