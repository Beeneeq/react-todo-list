import React from 'react'
import { Todo, useTodoDispatch } from '../contexts/TodosContext'
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItem = ({text, done, id}: Todo) => {  
  const dispatch: any = useTodoDispatch()
  const onToggle = () => dispatch({ type: 'TOGGLE', id })
  const onDelete = () => dispatch({ type: 'REMOVE', id })
  const onMouseOver = () => {
    // 추후 수정
  }

  return (
    <li className={done ? 'flex2 todo-item done' : 'flex2 todo-item'} key={id} onMouseOver={onMouseOver}>
        {text}
        <div className='flex'>
          <div className='btn-check' onClick={onToggle}>
            <MdDone/>
          </div>
          <div className='btn-del' onClick={onDelete} style={{marginLeft: '10px'}}>          
            <MdDelete/>
          </div>
        </div>
    </li>
  )
}

export default React.memo(TodoItem);