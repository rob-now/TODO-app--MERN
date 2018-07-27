import React, { Component } from 'react'
import {
  StyledAddTodoContainer,
  StyledAddTodoInputContainer,
  StyledAddTodoInput,
  StyledSubmitButton,
} from './styledComponents/styledApp'

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
        <StyledAddTodoContainer>
          <StyledAddTodoInputContainer>
            <StyledAddTodoInput
              type="text"
              name="todoName"
              value={todoName}
              onChange={this.handleChange}
            />
            <StyledSubmitButton
              type="submit"
            >
              +
            </StyledSubmitButton>
          </StyledAddTodoInputContainer>
          {formError && <p>{formError.message}</p>}
        </StyledAddTodoContainer>
      </form>
    )
  }
}

export default TodoForm
