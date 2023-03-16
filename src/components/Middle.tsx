import React from 'react'
import TodoItem from './TodoItem'
import './Middle.scss'

interface propsType {
  todos: Array<any>
}

const Middle = ({todos}:propsType) => {
  const TodoList: any = todos.map((todo) => {
    return <TodoItem text={todo.text} isChecked={todo.isChecked} id={todo.id}/>
  })
  
  return (
    <ul className='todo-list'>
      {TodoList}
    </ul>
  )
}

export default Middle