import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(people => this.setState({ people }))
  }

  render() {
    const { people } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>People</h2>
        <ul>
          {people.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
