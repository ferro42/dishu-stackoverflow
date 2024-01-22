import React from 'react'
import Questions from './Questions'
const Questionlist = ({questionslist}) => {
  return (
    <>
      {
        questionslist.map((question)=>(
        <Questions questions={question} key={question._id}/>

        ))
      }
    </>
  )
}

export default Questionlist
