import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todoName: '',
    todos: [],
    isFetching: false,
  }

  componentDidMount() {
    this.setState({
      isFetching: true,
    })

    fetch('/api/todos/test_user1')
      .then(res => res.json())
      .then(todos => this.setState({ todos, isFetching: false }))
      .catch(err => err.message)
  }

  handleChange = (event) => {
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
    const { todos, todoName, isFetching } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Todos</h2>
        <TodoForm
          todoName={todoName}
          addTodo={this.addTodo}
          handleChange={this.handleChange}
        />
        <TodoList
          todos={todos}
          removeTodo={this.removeTodo}
          isFetching={isFetching}
        />
      </div>
    )
  }
}

export default App
