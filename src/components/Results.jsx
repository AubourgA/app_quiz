

export default function Results( {results, datas}) {
    console.log(datas)
  return (
    <div>
        <h2 className="font-semibold text-xl">Résultat du QUIZ</h2>

                <p className="text-lg my-5">Total questions : <span className="text-red-700">{datas.totalQuestions}</span> </p>

                <p className="text-lg my-5">Total Score : <span className="text-3xl">{results.score}</span></p>
                <p className="text-lg my-5">Réponse Correct :<span className="text-3xl">{results.correctAnswer}</span></p>
                <p className="text-lg my-5">Mauvaise Réponse : <span className="text-3xl">{results.wrongAnswer}</span></p>
    </div>
  )
}
