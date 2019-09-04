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
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calc-body">
            <Display value={ this.state.next || this.state.total || this.state.error || '0'} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
