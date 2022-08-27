import { useState } from 'react'
import './App.css'
import Die from './components/Die'

function App() {
  const [die, setDie] = useState(allNewDice)

  function allNewDice() {
    const dieArray = [];
    for(let i = 0; i < 10; i++){
      dieArray.push(Math.ceil(Math.random()*6))
    }
    return dieArray
  }

  function rollDice(){
    setDie(allNewDice())
  }

  const Dies = die.map(die => {
    return <Die 
    value={die} />
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
