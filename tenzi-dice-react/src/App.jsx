import { useState } from 'react'
import './App.css'
import Die from './components/Die'

function App() {
  const [die, setDie] = useState(allNewDice)

  function allNewDice() {
    const dieArray = [];
    for(let i = 0; i < 10; i++){
      dieArray.push({ value: Math.ceil(Math.random()*6), isHeld: false })
    }
    return dieArray
  }

  function rollDice(){
    setDie(allNewDice())
  }

  const Dies = die.map(die => {
    return <Die 
    value={die.value} />
  })
  return (
    <main className='tenzi-main'>
      <section className='die-section'>
        {Dies}
      </section>
      {<button onClick={rollDice} className='roll-diceButton'>Roll</button>}
    </main>
  )
}

export default App
