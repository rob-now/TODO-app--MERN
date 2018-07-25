import React, { Component, Fragment } from 'react'
import {
  StyledTodoButtonsContainer,
  StyledTodoContainer,
  StyledEditButton,
  StyledRemoveButton,
} from './styledComponents/styledApp'

class TodoContent extends Component {
  handleTodoClick = () => {
    this.props.todo.isDone
    this.props.toggleTodoDone(this.props.todo._id, this.props.todo)
  }

  render() {
    const {
      todo,
      editTodoMode,
      removeTodo,
      toggleTodoDone,
    } = this.props
    return (
      <Fragment>
        <StyledTodoContainer onClick={this.handleTodoClick}>
          {/* <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleTodoDone(todo._id, todo)}
          /> */}
          <p>
            {
              todo.isDone
                ? <del>{todo.todo}</del>
                : todo.todo
            }
          </p>

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
