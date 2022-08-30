import React
 from "react"
export default function StartPage(props) {
    
    return (
        <section className="start-page">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.handleClick}>Start Quiz</button>
        </section>
    )
}