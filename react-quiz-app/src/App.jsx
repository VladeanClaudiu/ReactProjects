import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Question from './components/Question'

function App() {
  const [gameStart, setGameStart] = useState(false)

  function changeGameState() {
    setGameStart(oldGame => !oldGame)
  }

  return (
    <main>
      {!gameStart && <StartPage 
      handleClick={changeGameState}
      />}
      {gameStart && 
      <section className='qeustion-section'><Question />
      </section>}
      {/* ^^^ main quiz component to be added here :) */}
    </main>
  )
}

export default App
