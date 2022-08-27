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

  const Dies = die.map(item => {
    return <Die value={item} />
  })
  return (
    <main className='tenzi-main'>
      <section className='die-section'>
        {Dies}
      </section>
      
    </main>
  )
}

export default App
