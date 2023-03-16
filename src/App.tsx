import React from 'react';
import './App.scss';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Top from './components/Top';


function App() {
  const todos: any = [
    {
      text: 'sssssssssssssss',
      id: 1,
      done: false
    },
    {
      text: 'ssssss',
      id: 2,
      done: false
    },
    {
      text: 'sssssssssss',
      id: 3,
      done: false
    },
  ]
  return (
    <div className="App">
      <Top/>
      <Middle todos={todos}/>
      <Bottom/>
    </div>
  );
}

export default App;
