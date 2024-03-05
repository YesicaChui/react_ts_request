import React from 'react'

interface IButton{
  text: string
  
}
const Button = (props:IButton) => {
  
  return (
    <button>{props.text}</button>
  )
}

export default Button