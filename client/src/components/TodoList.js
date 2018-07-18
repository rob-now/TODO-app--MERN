import React from 'react'

function TodoList(props) {
  const { todos, removeTodo, isFetching } = props

  return (
    <ul>
      {
        isFetching ? <h3>Loading Todos...</h3> : todos.map(todo => (
          <li key={todo._id}>
            {todo.todo} [is done: {todo.isDone.toString()}]
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

export default TodoList
