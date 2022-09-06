import React from "react";
import randomise from "../utils/randomise";
import { useMemo } from "react";

export default function Question(props) {
    const answerOption = useMemo(()=> randomise([...props.incorrectAnswers, props.correctAnswer]),
    [props.correctAnswer, props.incorrectAnswers])

    
    return(
        <section className="question">
             <h3 className="question-head">{props.questionAsked}</h3>
            <div className="question-options">
                {answerOption.map((option, index) =>(
                    
                        <button
                                disabled = {props.disabled}
                                className={`option 
                                            ${props.pickedQuestionAnswer === option && "selected"}
                                            ${(props.correctAnswer === option &&
                                               props.disabled) && "correct"}
                                            ${(props.pickedQuestionAnswer === option &&
                                               props.correctAnswer !== option &&
                                               props.disabled) && "incorrect"}
                                            `}
                                key={index}
                                onClick={() =>props.pickAnswer(option)}>
                            {decodeURIComponent(option)}
                            </button>
                    ))
                }
            </div>
        </section>
    )
}