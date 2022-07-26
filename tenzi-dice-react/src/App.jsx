import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import { useEffect } from 'react'
import Confetti from 'react-confetti'

function App() {
  const [die, setDie] = useState(allNewDice)
  const [tenzi, setTenzi] = useState(false);
  const [rolls, setRolls] = useState(0);
  // const [timer, setTimer] = useState(0);
 
  useEffect(()=> {
    console.log("Dice state changed")
    const isHeldCheck = die.every(die => die.isHeld)
    const valueAimed = die[0].value;

    const isValueEqual = die.every(die => die.value === valueAimed);

    if(isHeldCheck && isValueEqual){
      console.log("you won")
      setTenzi(oldTenz => !oldTenz)
    }else{
      console.log("not yet buddy")
    }

  },[die])

  useEffect(() => {
    console.log(rolls)
  }, [rolls])

  // useEffect(() =>{
  //     if(!tenzi){
  //       setInterval(() => {
  //         setTimer(oldTime => oldTime+1)
  //       }, 1000)   
  //     }else{
  //       setTimer(oldTime =>oldTime(0))
  //     }   
  // },[])

  // console.log(timer)

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
    if(tenzi){
      setDie(allNewDice())
      setTenzi(oldTenz=> !oldTenz)
    }else{
      setRolls(oldRolls=> oldRolls+=1)  
      setDie(oldDie => oldDie.map(die => {
        return die.isHeld ?
         die : 
         {...die, 
          id: nanoid(),
          value: Math.ceil(Math.random()*6)}
        }))
    }
    
  }

  function holdDice(id) {
    setDie(oldDie=> oldDie.map(die => {
      return die.id ===id ? {...die, isHeld: !die.isHeld} : die
    }) )
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
      {tenzi && <Confetti className='confetti-width'/>}
      <h1 className='tenzi-title'>Tenzies</h1>
      <p className="tenzi-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='die-section'>
        {Dies}
      </section>
      {<button onClick={rollDice} className='roll-diceButton'>{!tenzi? 'Roll' : 'New Game'}</button>}
    </main>
  )
}
export default App
