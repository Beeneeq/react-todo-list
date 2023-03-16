import React, { useState } from 'react'
import './Bottom.scss'

const Bottom = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [value, setValue] = useState('');

  const ChangeOpened = () => {
    if(setIsOpened) {
      setIsOpened(false)
    } 
    setIsOpened(true)
  }
  
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className={!isOpened ? 'bottom-wrap' : 'bottom-wrap on'}>
        <button className='btn-plus' onClick={ChangeOpened}><span className='blind'>펼치기</span></button>
        <input 
          type="text" 
          id="" 
          className='inp-add' 
          placeholder='text here...'
          value={value}
          onChange={updateValue}
        />
        <button type="submit" className='btn-add'>Add!</button>
      </div>
      <div className='dim-bg'></div>
    </>
  )
}

export default Bottom