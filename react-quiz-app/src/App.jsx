import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Question from './components/Question'
import { useEffect } from 'react'

function App() {
  const [gameStart, setGameStart] = useState(false)
  const [quizState, setQuizState] = useState([])

  function changeGameState() {
    setGameStart(oldGame => !oldGame)
  }

  useEffect(() => {
    async function getQuiz(){
      
      const res = await fetch('https://opentdb.com/api.php?amount=6')
      const data = await res.json();
      console.log(data.results)
      setQuizState(oldQuiz => data.results)
    }
    getQuiz();
  },[])
  console.log(quizState)
  const quizQuestion = quizState.map(question=>{
    return(
      <Question 
        questionAsked = {question.question.toString()}
      />
    )
  })
  return (
    <main>
      {!gameStart && <StartPage 
      handleClick={changeGameState}
      />}
      {gameStart && 
      <section className='question-section'>{quizQuestion}
      </section>}
      {/* ^^^ main quiz component to be added here :) */}
    </main>
  )
}

export default App
