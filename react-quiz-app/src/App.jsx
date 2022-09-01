import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Question from './components/Question'
import { useEffect } from 'react'

function App() {
  const [gameStart, setGameStart] = useState(false)
  //holds all the data fetched from api
  const [quizState, setQuizState] = useState([])
  const [quizUsed, setQuizUsed] = useState([])

  function changeGameState() {
    setGameStart(oldGame => !oldGame)
  }

  useEffect(() => {
    async function getQuiz(){
      const res = await fetch('https://opentdb.com/api.php?amount=6&type=multiple&encode=url3986')
      const data = await res.json();
      console.log(data.results)
      setQuizState(data.results)
    }
    getQuiz();
  },[])

  const quizUse = quizState.map(question => {
    const answerArray = [];
    const incorrectArray = [];
    question.incorrect_answers.map(answer => {
      incorrectArray.push({
        answer :decodeURIComponent(answer),
        correct : false,
        selected : false})
    })

    console.log(incorrectArray)
    //array correct answer push
    answerArray.push({question: decodeURIComponent(question.question),
                      corAnswers : 
                      {answer : decodeURIComponent(question.correct_answer),
                      correct : true,
                      selected : false
                      },
                      incorrect : {incorrectArray}  
                    })
    
    return answerArray
  })

  console.log(quizUse)
  const quizQuestion = quizState.map(question=>{
    const answerArray = [];
    //array correct answer push
    answerArray.push({
                      answer :decodeURIComponent(question.correct_answer),
                      correct : true,
                      selected : false
                    })
    //array incorrect answer push
    for(let inc in question.incorrect_answers){
      answerArray.push({
                        answer :decodeURIComponent(question.incorrect_answers[inc]),
                        correct : false,
                        selected : false
                      })
    }

    return(
      <Question 
      //decodeUriComponent fixes url enchoding response
        questionAsked = {decodeURIComponent(question.question.toString())}
        answers = {answerArray}
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
