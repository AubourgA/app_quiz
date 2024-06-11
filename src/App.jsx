import { quiz } from './lib/datas.js'
import { useState } from 'react'


import Question from './components/Question.jsx'
import ListAnswer from './components/ListAnswer.jsx'
import BtnQuiz from './components/BtnQuiz.jsx'

function App() {
  

  const [activeQuestion, setActiveQuestion] = useState(0)
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  const [selectedIndex, setSelectedIndex] = useState(null)
  const { questions } = quiz
  

  const { question, choices } = questions[activeQuestion]

  const handleNextQuestion = () => {
    setActiveQuestion( v => v + 1)
    setSelectedIndex(null)
  }

   const handleActiveAnswer = (index) =>()=> {
       setSelectedIndex(index)   
    }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-800 to-pink-400 ' >
        <div className='bg-slate-100 w-[750px] h-[750px] mx-2 p-10'>

              <h1 className="font-semibold text-2xl text-center p-2">Quiz sur {quiz.topic}</h1>
              
              <h2> <span className="text-pink-800 text-3xl font-semibold">{activeQuestion + 1}</span>   <span className="font-light text-slate-500"> / {questions.length}</span> </h2>
              <Question datas={question} active={activeQuestion}  />
              <ListAnswer datas={choices} activeIndex={selectedIndex} onSelect={handleActiveAnswer}/>
              <BtnQuiz onClick={ handleNextQuestion } />
        </div>
    </div>
  )
}

export default App
