import { Fragment } from 'react';


export default function BtnQuiz( {onClick : handleclick}) {
  return (
    <Fragment >
      

            <button onClick={handleclick } className="border px-4 py-2 rounded-xl ml-auto block 
            bg-gradient-to-r from-pink-800 to-pink-400 text-slate-100
            hover:text-pink-200">Next</button>
   
    </Fragment>
  )
}
