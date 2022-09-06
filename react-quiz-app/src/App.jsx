import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Question from './components/Question'
import { useEffect } from 'react'


function App() {
  const [gameStart, setGameStart] = useState(false)
  //holds all the data fetched from api
  const [quizQuestions, setQuizQuestions] = useState([])
  //holds the question id and matching answer
  const [answers, setAnswers] = useState({})
  //holds score
  const [score, setScore] = useState(null)

  //changes game state 
  function changeGameState() {
    setGameStart(oldGame => !oldGame)
  }

  
  //fetch api data
  useEffect(() => {
    async function getQuiz(){
      const res = await fetch('https://opentdb.com/api.php?amount=6&type=multiple&encode=url3986')
      const data = await res.json();
      setQuizQuestions(data.results)
    }
    getQuiz();
  },[])

  function pickQuestionAnswer(questionID, answer){
    console.log(questionID, answer)
    setAnswers(prevAnswer => {
      return { ...prevAnswer,
         [questionID] : answer 
      }
    });
  }

  function checkAnswers() {
    const correctAnswers = quizQuestions.map((question) => {
      return question.correct_answer;
    });

    console.log(correctAnswers)
    const totalCorrect = correctAnswers.filter(
      (correctAnswer, index) => {
        return correctAnswer === answers[index]
    }
    
    );
    console.log(totalCorrect)
    setScore(totalCorrect.length)
  }
  console.log(answers)

  //map data and pass it to Question component as props
  const quizQuestion = quizQuestions.map((question, questionID)=>{
    return(
      <Question  
        key = {questionID}
        disabled = {score !== null}
        incorrectAnswers = {question.incorrect_answers}
        correctAnswer = {question.correct_answer}
        questionAsked = {decodeURIComponent(question.question)}
        pickedQuestionAnswer = {answers[questionID]}
        pickAnswer = {(answer) => 
          pickQuestionAnswer(questionID, answer)
        }
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
      <button
            disabled = {quizQuestions.length !== Object.keys(answers).length}
            className="check-button"
            onClick={checkAnswers}>Check Answers</button>
      </section>}
     
    </main>
  )
}

export default App
