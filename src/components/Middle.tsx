import React from 'react'
import TodoItem from './TodoItem'
import './Middle.scss'
import { useTodoState } from '../contexts/TodosContext'

const Middle = () => {  
  const todos: any = useTodoState();
  
  return (
    <ul className='todo-list'>
        {todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
    </ul>
  )
}

export default React.memo(Middle)