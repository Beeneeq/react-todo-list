import React from 'react';
import './Top.scss';

const Top = ({darkMode, setDarkMode}: any | null ) => {
  const now = new Date();

  const monthList: Array<string> = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUl', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  const day: number = now.getDate();
  const month: string = monthList[now.getMonth()];
  const year: number = now.getFullYear();
  const date: string = now.toLocaleDateString('en-US', { weekday: 'long'}).toUpperCase();

  const onclick = () => setDarkMode(!darkMode)

  return (
    <>
      <div className="day-wrap flex2">
          <div className='flex'>
              <h1 className="day">{day}</h1>
              <div>
                  <h2 className="month">{month}</h2>
                  <h2 className="year">{year}</h2>
              </div>
          </div>
          <h3 className='date'>{date}</h3>
      </div>
      <button className='btn-mode' data-dark={darkMode} onClick={onclick}>
        { darkMode ? 'light' : 'dark' }
      </button>
    </>
  )
}

export default Top