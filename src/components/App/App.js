import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import calculate from '../../logic/calculate';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calc-body">
            <Display value="this is display panel" />
            <ButtonPanel className="button-panel" />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
