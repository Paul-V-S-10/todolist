import React from 'react'

export const InputBox = (props) => {
  return (
    <input type='text' name={props.name} placeholder={props.placeholder} onChange={(e)=>props.onChange(e.target.value)} />
  )
}

