import React from 'react'
import styled from 'styled-components'


type IQuestion = {
  Question:string;
  Alternatives:string[]
  RightAlternative:string
}
interface QuestionProps{
  Question: IQuestion
}

const Question = (props:QuestionProps) => {
  const {Question,Alternatives}=props.Question;
  return (
    <>
       <h2>{Question}</h2>
        <ul>
          {
            Alternatives.map((alternative,index)=>(
              <li key={index}>{alternative}</li>
            ))
          }
        </ul>
    </>
  )
}

export default Question