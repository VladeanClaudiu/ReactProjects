import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Die from './components/Die'

function App() {
  function allNewDice() {
    const dieArray = [];
    for(let i = 0; i < 10; i++){
      dieArray.push(Math.floor(Math.random()*6)+1)
    }
    return dieArray
  }

  
  const generatedDieArray = allNewDice()
  console.log(generatedDieArray)
  const Dies = generatedDieArray.map(item => {
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
