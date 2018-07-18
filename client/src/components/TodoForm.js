import React, { Component } from 'react'
import './TodoForm.css'

class TodoForm extends Component {
  state = {
    todoName: '',
    formError: null,
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { todoName } = this.state

    const { addTodo } = this.props

    if (todoName.trim() === '') {
      this.setState({
        formError: new Error('Todo name cannot be empty.'),
      })
      return
    }

    addTodo(todoName)

    this.setState({
      todoName: '',
      formError: null,
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const {
      todoName,
      formError,
    } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
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
        {formError && <p className="form-error-message">{formError.message}</p>}
      </form>
    )
  }
}

export default TodoForm
