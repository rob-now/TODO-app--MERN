import React, { Component } from 'react'
import TodoContent from './TodoContent';

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
                <TodoContent
                  todo={todo}
                  editTodoMode={this.editTodoMode}
                  removeTodo={removeTodo}
                />
              </li>
            ))
        }
      </ul>
    )
  }
}

export default TodoList
