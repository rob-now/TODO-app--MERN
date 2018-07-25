import React, { Component, Fragment } from 'react'
import {
  StyledTodoButtonsContainer,
  StyledTodoContainer,
} from './styledComponents/styledApp'

class TodoContent extends Component {
  render() {
    const {
      todo,
      editTodoMode,
      removeTodo,
      toggleTodoDone,
    } = this.props
    return (
      <Fragment>
        <StyledTodoContainer>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleTodoDone(todo._id, todo)}
          />
          {
            todo.isDone
              ? <del>{todo.todo}</del>
              : todo.todo
          }

        </StyledTodoContainer>
        <StyledTodoButtonsContainer>
          <button
            type="button"
            onClick={() => editTodoMode(todo._id)}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => removeTodo(todo._id)}
          >
            Remove
          </button>
        </StyledTodoButtonsContainer>
      </Fragment>
    )
  }
}

export default TodoContent
