import React, { Component } from 'react'

class TodoList extends Component {
  state = {
    editTodoId: null,
  }

  editTodoMode = (todoId) => {
    this.setState({
      editTodoId: todoId,
    })
  }


  render() {
    const {
      todos,
      isFetching,
      removeTodo,
      toggleTodoDone,
    } = this.props

    const { editTodoId } = this.state
    console.log(editTodoId)
    return (
      <ul>
        {
          isFetching
            ? <h3>Loading Todos...</h3>
            : todos.map(todo => (
              <li key={todo._id}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => toggleTodoDone(todo._id, todo)}
                />
                {
                  editTodoId === todo._id && '*'
                }
                {
                  todo.isDone
                    ? <del>{todo.todo}</del>
                    : todo.todo
                }
                <button
                  type="button"
                  onClick={() => this.editTodoMode(todo._id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => removeTodo(todo._id)}
                >
                  Remove
                </button>
              </li>
            ))
        }
      </ul>
    )
  }
}

export default TodoList
