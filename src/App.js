import React, { Component } from 'react';

class App extends Component {
  add1 = () => {
    this.props.store.dispatch({ type: 'add', payload: 1 })
  }
  minus1 = () => {
    this.props.store.dispatch({ type: 'add', payload: -1 })
  }
  addIfOdd = () => {
    if (this.props.store.getState() % 2 === 1) {
      this.props.store.dispatch({ type: 'add', payload: 1 })
    }
  }
  addSync = () => {
    setTimeout(() => {
      this.props.store.dispatch({ type: 'add', payload: 1 })
    }, 2000)
  }
  render() {
    return (
      <div className="App">
         <div>
        你点击了<span id="value">{this.props.store.getState()}</span>次
        <div>
          <button id="add1" onClick={this.add1}>+1</button>
          <button id="minus1" onClick={this.minus1}>-1</button>
          <button id="addIfOdd" onClick={this.addIfOdd}>如果是单数就+1</button>
          <button id="add1After2Sec" onClick={this.addSync}>两秒后+1</button>
        </div>
      </div>
      </div>
    )
  }
  
}

export default App;
