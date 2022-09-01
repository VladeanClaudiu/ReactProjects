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

  //object formatting 
  const quizUse = quizState.map(question => {
    const answerArray = [];

    const incorrectArray = [];
    question.incorrect_answers.map(answer => {
      incorrectArray.push({
        answer :decodeURIComponent(answer),
        correct : false,
        selected : false})
    })

    //array correct answer push
    answerArray.push({question: decodeURIComponent(question.question),
                      corAnswers : 
                      {answer : decodeURIComponent(question.correct_answer),
                      correct : true,
                      selected : false
                      },
                      incorrect : ({incorrectArray} ) 
                    })
    return answerArray
  })

  useEffect(() => {
    setQuizUsed(quizUse)
  },[quizState])

  console.log(quizUsed)

  const quizQuestion = quizUse.map(question=>{
    const answerArray = [];
    //array correct answer push
    answerArray.push(question[0].corAnswers)
    //array incorrect answer push
    let arrayPath = question[0].incorrect.incorrectArray;
    for(let inc in arrayPath){
      let answer = arrayPath[inc].answer
      answerArray.push({
                        answer :decodeURIComponent(answer),
                        correct : false,
                        selected : false
                      })
    }

    return(
      <Question 
      //decodeUriComponent fixes url enchoding response
        questionAsked = {decodeURIComponent(question[0].question)}
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
