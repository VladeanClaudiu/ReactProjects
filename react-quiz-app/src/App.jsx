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

  useEffect(()  => {
    const fetchData = async() => {
    const data = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium')
    const jsonData =  data.json();
     return await jsonData;
    } 

    const result = fetchData()
    .catch(console.error);
     console.log(result)
  },[gameStart])

  return (
    <main>
      {!gameStart && <StartPage 
      handleClick={changeGameState}
      />}
      {gameStart && 
      <section className='question-section'><Question />
      </section>}
      {/* ^^^ main quiz component to be added here :) */}
    </main>
  )
}

export default App
