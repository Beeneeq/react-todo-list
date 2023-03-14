import React from 'react';
import './Top.scss';

const Top = () => {
  const now = new Date();

  const monthList: Array<string> = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUl', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dateList: Array<string> = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WENDSDAY', 'TURSDAY', 'FRIDAY', 'SATURDAY']
  
  const day: number = now.getDate();
  const month: string = monthList[now.getMonth()];
  const year: number = now.getFullYear();
  const date: string = dateList[now.getDay()];

  return (
    <div className="flex2">
        <div className='flex'>
            <h1 className="day">{day}</h1>
            <div>
                <h2 className="month">{month}</h2>
                <h2 className="year">{year}</h2>
            </div>
        </div>
        <h3 className='date'>{date}</h3>
    </div>
  )
}

export default Top