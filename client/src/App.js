import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    todoName: '',
    todos: [],
  }

  componentDidMount() {
    fetch('/api/todos/test_user1')
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
      .catch(err => err.message)
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  addTodo = (event) => {
    event.preventDefault()

    const { todoName } = this.state

    fetch('api/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: 'test-user1',
        todo: todoName,
        isDone: 'false',
        hasAttachment: 'false',
      }),
    }).catch(err => err.message)
      .then(fetch('/api/todos/test_user1')
        .then(res => res.json())
        .then(todos => this.setState({ todos }))
        .catch(err => err.message))

    this.setState({
      todoName: '',
    })
  }

  removeTodo = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => (
        todo._id !== todoId)),
    }))

    fetch('/api/todo', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: todoId,
      }),
    })
  }

  render() {
    const { todos, todoName } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Todos</h2>
        <form onSubmit={this.addTodo}>
          <label htmlFor="form-todo-name">Todo name:
            <input
              id="form-todo-name"
              type="text"
              name="todoName"
              value={todoName}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
          >
            Add todo
          </button>
        </form>
        <ul>
          {
            todos && todos.map(todo => (
              <li key={todo._id}>
                {todo.todo} [is done: {todo.isDone.toString()}]
                <button
                  type="button"
                  onClick={() => this.removeTodo(todo._id)}
                >
                  Remove
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App
