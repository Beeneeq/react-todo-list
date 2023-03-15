import React from 'react';
import './App.scss';
import Middle from './components/Middle';
import Top from './components/Top';


function App() {
  const todos: any = [
    {
      text: 'ss',
      id: '1',
      isChecked: false
    },
    {
      text: 'ss',
      id: '2',
      isChecked: false
    },
    {
      text: 'ss',
      id: '3',
      isChecked: false
    },
  ]
  return (
    <div className="App">
      <Top/>
      <Middle todos={todos}/>
    </div>
  );
}

export default App;
