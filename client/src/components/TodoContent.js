import React, { Component, Fragment } from 'react'
import {
  StyledTodoButtonsContainer,
  StyledTodoContainer,
  StyledEditButton,
  StyledRemoveButton,
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
          <StyledEditButton
            type="button"
            onClick={() => editTodoMode(todo._id)}
          >
            Edit
          </StyledEditButton>
          <StyledRemoveButton
            type="button"
            onClick={() => removeTodo(todo._id)}
          >
            Remove
          </StyledRemoveButton>
        </StyledTodoButtonsContainer>
      </Fragment>
    )
  }
}

export default TodoContent
