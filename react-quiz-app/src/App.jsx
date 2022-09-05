import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Question from './components/Question'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [gameStart, setGameStart] = useState(false)
  //holds all the data fetched from api
  const [quizState, setQuizState] = useState([])
  //holds formated data for the componets use
  const [quizUsed, setQuizUsed] = useState([])

  //changes game state 
  function changeGameState() {
    setGameStart(oldGame => !oldGame)
  }

  
  //fetch api data
  useEffect(() => {
    async function getQuiz(){
      const res = await fetch('https://opentdb.com/api.php?amount=6&type=multiple&encode=url3986')
      const data = await res.json();
      setQuizState(data.results)
      console.log(data.results)
    }
    getQuiz();
  },[])

  //object formatting 
  const quizUse = quizState.map(question => {
    const answerArray = [];
    const incorrectArray = [{answer : decodeURIComponent(question.correct_answer),
                             correct : true,
                             selected : false}];
    question.incorrect_answers.map(answer => {
      incorrectArray.push({
        answer :decodeURIComponent(answer),
        correct : false,
        selected : false})
    })

    //array correct answer push
    answerArray.push({
                      id : nanoid(),
                      question: decodeURIComponent(question.question),
                      answers : [...incorrectArray],
                    })
    return answerArray
  })

  
  //set quiz state
  useEffect(() => {
    setQuizUsed(quizUse)
  },[quizState])


  //setlect answer function
  const selectAnswer = (id)=> {
    console.log('button Pressed')
    console.log(id)
  }
console.log(quizUsed)
  //map data and pass it to Question component as props
  const quizQuestion = quizUsed.map(question=>{
    const key = question;
    const answerArray = [question[0].answers];
    console.log(answerArray)
    return(
      <Question  
        id = {key.id}
        key = {key.id}
        questionAsked = {decodeURIComponent(question[0].question)}
        answers = {answerArray}
        handleClick = {() =>selectAnswer(question[0].id)}
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
     
    </main>
  )
}

export default App
