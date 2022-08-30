import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'

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
      {gameStart && <This />}
      {/* ^^^ main quiz component to be added here :) */}
    </main>
  )
}

export default App
