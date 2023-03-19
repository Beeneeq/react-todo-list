import React from 'react'
import { Todo, useTodoDispatch } from '../contexts/TodosContext'
import { MdDone } from 'react-icons/md';

const TodoItem = ({text, done, id}: Todo) => {  
  const dispatch: any = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });

  return (
    <li className={done ? 'flex2 todo-item done' : 'flex2 todo-item'} key={id}>
        {text}
        <div className='btn-check' onClick={onToggle}>
          <MdDone/>
        </div>
    </li>
  )
}

export default React.memo(TodoItem);