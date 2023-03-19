import React, { useState } from 'react'
import './Bottom.scss'
import { useTodoDispatch, useTodoNextId } from '../contexts/TodosContext';

const Bottom = ({todos}: any) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const dispatch: any = useTodoDispatch();
  const nextId: any = useTodoNextId();


  const onClick = () => setIsOpened(!isOpened);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    })
    setValue('');
    setIsOpened(false);
    nextId.current += 1
  }

  return (
    <>
      <div className={!isOpened ? 'bottom-wrap' : 'bottom-wrap on'}>
        <button className='btn-plus' onClick={onClick}><span className='blind'>펼치기</span></button>
        <input 
          type="text" 
          id="" 
          className='inp-add' 
          placeholder='text here...'
          value={value}
          onChange={onChange}
        />
        <button 
          type="button" 
          className='btn-add'
          onClick={addTodo}
        >Add!</button>
      </div>
      <div className='dim-bg'></div>
    </>
  )
}

export default React.memo(Bottom)