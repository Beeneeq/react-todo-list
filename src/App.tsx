import React from 'react';
import './App.scss';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Top from './components/Top';
import { TodoProvider } from './contexts/TodosContext';


function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Top/>
        <Middle/>
        <Bottom/>
      </TodoProvider>
    </div>
  );
}

export default App;
