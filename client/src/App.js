import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    people =[]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>People</h2>
      </div>
    )
  }
}

export default App
