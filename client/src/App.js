import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    fetch('/api/todos/test_user1')
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Todos</h2>
        <ul>
          {
            todos && todos.map(todo => (
              <li key={todo._id}>
                {todo.todo} [is done: {todo.isDone.toString()}]
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App
