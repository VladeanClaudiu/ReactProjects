import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'

function App() {
  const [die, setDie] = useState(allNewDice)

  function allNewDice() {
    const dieArray = [];
    for(let i = 0; i < 10; i++){
      dieArray.push({ 
        id: nanoid(),
        value: Math.ceil(Math.random()*6), 
        isHeld: false 
      })
    }
    return dieArray
  }

  function rollDice(){
    setDie(allNewDice())
  }

  function holdDice(id) {
    console.log(id)
  }

  const Dies = die.map(die => {
    return <Die 
    key={die.id}
    id={die.id}
    value={die.value} 
    held={die.isHeld}
    onHandle={()=>holdDice(die.id)}/>
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
