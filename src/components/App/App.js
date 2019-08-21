import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <ButtonPanel />
      </header>
    </div>
  );
}

export default App;
