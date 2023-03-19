import React, { useState } from 'react';
import './App.scss';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Top from './components/Top';
import { TodoProvider } from './contexts/TodosContext';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className="App" data-dark={darkMode}>
      <TodoProvider>
        <Top darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Middle/>
        <Bottom/>
      </TodoProvider>
    </div>
  );
}

export default App;
