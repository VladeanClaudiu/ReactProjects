import React
 from "react"
export default function StartPage(props) {
    
    return (
        <section className="start-page">
            <h1>Quizzical</h1>
            <p>The ultimate quiz experience 😅</p>
            <button onClick={props.handleClick}>Start Quiz</button>
        </section>
    )
}