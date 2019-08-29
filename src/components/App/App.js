import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import calculate from '../../logic/calculate';

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    error: null
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className = "calc-body">
            <Display value={ this.state.next || this.state.total || this.state.error || '0'} />
            <ButtonPanel className = "button-panel" clickHandler = {this.handleClick} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
