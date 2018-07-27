import React, { Component, Fragment } from 'react'
import {
  StyledTodoButtonsContainer,
  StyledTodoContainer,
  StyledEditButton,
  StyledRemoveButton,
  StyledTodoParagraph,
} from './styledComponents/styledApp'

class TodoContent extends Component {
  handleTodoClick = () => {
    this.props.toggleTodoDone(this.props.todo._id, this.props.todo)
  }

  render() {
    const {
      todo,
      editTodoMode,
      removeTodo,
    } = this.props
    return (
      <Fragment>
        <StyledTodoContainer
          isDone={todo.isDone}
          onClick={this.handleTodoClick}
        >
          <StyledTodoParagraph>
            {
              todo.isDone
                ? <del>{todo.todo}</del>
                : todo.todo
            }
          </StyledTodoParagraph>

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
