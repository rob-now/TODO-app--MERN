import React, { Component, Fragment } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  StyledApp,
  StyledAppHeader,
  H1,
} from './components/styledComponents/styledApp'

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
      .then(
        fetch('/api/todos/test_user1')
          .then(res => res.json())
          .then(todos => this.setState({ todos }))
          .catch(err => err.message),
      )
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

  updateTodo = (todoId, todoName, isDone, hasAttachment) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => (
        todo._id !== todoId
          ? todo
          : {
            ...todo,
            todo: todoName,
          }
      )),
    })

    fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: todoId,
        todo: todoName,
        isDone,
        hasAttachment,
      }),
    })
  }

  render() {
    const {
      todos,
      isFetching,
    } = this.state

    return (
      <Fragment>
        {/* <StyledApp> */}
        <StyledAppHeader>
          {/* <H1>My todos</H1> */}
        </StyledAppHeader>
        {/* </StyledApp> */}
        <div>
          <TodoForm
            addTodo={this.addTodo}
          />
          <TodoList
            todos={todos}
            removeTodo={this.removeTodo}
            isFetching={isFetching}
            toggleTodoDone={this.toggleTodoDone}
            updateTodo={this.updateTodo}
          />
        </div>
      </Fragment>
    )
  }
}

export default App
