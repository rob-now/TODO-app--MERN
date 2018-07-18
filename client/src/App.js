import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
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

  addTodo = (todoName) => {
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

  toggleTodoDone = (todoId, todo) => {
    this.setState({
      todos: this.state.todos.map(todo => (
        todo._id === todoId
          ? {
            ...todo,
            isDone: !todo.isDone,
          }
          : {
            ...todo,
          }
      )),
    })

    fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ...todo,
        id: todo._id,
        isDone: !todo.isDone,
      }),
    })
  }

  render() {
    const {
      todos,
      isFetching,
    } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Todos</h2>
        <TodoForm
          addTodo={this.addTodo}
        />
        <TodoList
          todos={todos}
          removeTodo={this.removeTodo}
          isFetching={isFetching}
          toggleTodoDone={this.toggleTodoDone}
        />
      </div>
    )
  }
}

export default App
