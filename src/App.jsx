import { quiz } from './lib/datas.js'
import { useState } from 'react'


import Question from './components/Question.jsx'
import ListAnswer from './components/ListAnswer.jsx'
import BtnQuiz from './components/BtnQuiz.jsx'
import Results from './components/Results.jsx'

const INITIAL_RESULT = {
  score : 0,
  correctAnswer : 0,
  wrongAnswer : 0,
}

function App() {
  
  const { questions } = quiz
  
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [result, setResult] = useState( INITIAL_RESULT)
  const [displayScore, setDisplayScore] = useState(false)
  
  const { question, choices, correctAnswer } = questions[activeQuestion]
  


  const handleNextQuestion = () => {
  
    setSelectedIndex(null)
    setActiveQuestion( v => v + 1)
    setResult(  (prev) => selectedAnswer ? {...prev, score : prev.score + quiz.perQuestionScore, correctAnswer : prev.correctAnswer + 1 }  : {...prev, wrongAnswer : prev.wrongAnswer + 1})
      if(activeQuestion === 3) {
        setActiveQuestion(0)
        setDisplayScore(true)
        return
      }
  
  }

   const handleActiveAnswer = (item, index) =>()=> {
       setSelectedIndex(index) 
      setSelectedAnswer(item === correctAnswer)
      
    }



  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-800 to-pink-400 ' >
        <div className='bg-slate-100 w-[750px] h-[750px] mx-2 p-10'>

              <h1 className="font-semibold text-2xl text-center p-2">Quiz sur {quiz.topic}</h1>
              
              {
                !displayScore ? (
                  <div>
                        <h2> <span className="text-pink-800 text-3xl font-semibold">{activeQuestion + 1}</span>   <span className="font-light text-slate-500"> / {questions.length}</span> </h2>
                        <Question datas={question} active={activeQuestion}  />
                        <ListAnswer datas={choices} activeIndex={selectedIndex} onSelect={handleActiveAnswer} />
                      <BtnQuiz onClick={ handleNextQuestion } label={activeQuestion === quiz.totalQuestions - 1 ? "Résultat" : "Suivant"} />
                    </div>
                ) : (
                  <div>
                      <Results  results={result} datas={quiz} />

                  </div>

                )
              }
        </div>
        
    </div>
  )
}

export default App
