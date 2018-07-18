import React from 'react'

function TodoList(props) {
  const {
    todos,
    isFetching,
    removeTodo,
    toggleTodoDone,
  } = props

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
                todo.isDone
                  ? <del>{todo.todo}</del>
                  : todo.todo
              }
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
