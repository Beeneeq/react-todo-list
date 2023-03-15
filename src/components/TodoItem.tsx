import React from 'react'

interface propsType {
    text: string,
    isChecked: boolean,
    id: string
}

const TodoItem = ({text, isChecked, id}:propsType) => {
  return (
    <li className='flex2 todo-item' key={id}>
        {text}
        <input type="checkbox" id={id} checked={isChecked}/>
        <label htmlFor={id}><span className='blind'>체크하기</span></label>
    </li>
  )
}

export default TodoItem