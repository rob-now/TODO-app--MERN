import React, { Component } from 'react'

class TodoEditForm extends Component {
  state = {
    todoName: '',
    formError: null,
  }

  componentDidMount() {
    const { todoName } = this.props
    this.setState({
      todoName,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { todoName } = this.state

    const {
      todoId,
      isDone,
      hasAttachment,
      updateTodo,
      exitEditTodoMode,
    } = this.props

    if (todoName.trim() === '') {
      this.setState({
        formError: new Error('Todo name cannot be empty.'),
      })
      return
    }

    updateTodo(todoId, todoName, isDone, hasAttachment)
    exitEditTodoMode()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null,
    })
  }

  render() {
    const {
      todoName,
      formError,
    } = this.state

    const {
      exitEditTodoMode,
    } = this.props

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
          Update todo
        </button>
        <button
          type="button"
          onClick={() => exitEditTodoMode()}
        >
          Cancel
        </button>
        {formError && <p className="form-error-message">{formError.message}</p>}
      </form>
    )
  }
}

export default TodoEditForm
