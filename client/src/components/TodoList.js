import React, { Component } from 'react'
import TodoContent from './TodoContent';
import TodoEditForm from './TodoEditForm';

class TodoList extends Component {
  state = {
    editTodoId: null,
  }

  editTodoMode = (todoId) => {
    this.setState({
      editTodoId: todoId,
    })
  }

  exitEditTodoMode = () => {
    this.setState({
      editTodoId: null,
    })
  }

  render() {
    const {
      todos,
      isFetching,
      removeTodo,
      toggleTodoDone,
      updateTodo,
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
                {
                  editTodoId === todo._id
                    ? (
                      <TodoEditForm
                        todoId={todo._id}
                        todoName={todo.todo}
                        isDone={todo.isDone}
                        hasAttachment={todo.hasAttachment}
                        updateTodo={updateTodo}
                        exitEditTodoMode={this.exitEditTodoMode}
                      />
                    )
                    : (
                      <TodoContent
                        todo={todo}
                        toggleTodoDone={toggleTodoDone}
                        editTodoMode={this.editTodoMode}
                        removeTodo={removeTodo}
                      />
                    )
                }
              </li>
            ))
        }
      </ul>
    )
  }
}

export default TodoList
