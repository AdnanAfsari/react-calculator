import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Display />
          <ButtonPanel />
      </div>
    );
  }
}

export default App;
