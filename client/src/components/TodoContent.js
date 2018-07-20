import React, { Component, Fragment } from 'react'

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
      </Fragment>
    )
  }
}

export default TodoContent
