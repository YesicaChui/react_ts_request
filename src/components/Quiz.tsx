import React, { useState } from 'react'
import styled from 'styled-components'
import questions from '../json/questions.json'
import Question from './Question'
const QuizStyled = styled.div`
  padding: 1rem 1rem;
  h2{
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0 1rem 0;
  }
  ul{
    li{
      border: 1px solid gainsboro;
      border-radius: 2rem;
      font-weight: 400;
      margin-bottom: 1rem;
      padding: 1rem 1rem;
    }
  }
  button{
    background-color: #313648;
    border-radius: 2rem;
    border: 0;
    color: white;
    cursor: pointer;
    padding:  1rem 0;
    width: 100%;
  }

  .btnWrapper{
    margin-top: 2em;
  }
`
const Quiz = () => {
  const [index, setIndex]=useState(0)

  console.log(questions)
  return (
    <QuizStyled>
      <div>
        <div>1/12</div>
       <Question Question={questions[index]}/>
        <div className='btnWrapper'>
          <button>Continue</button>
        </div>
      </div>
    </QuizStyled>
  )
}

export default Quiz