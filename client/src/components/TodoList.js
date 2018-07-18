import React from 'react'

function TodoList(props) {
  const { todos, removeTodo } = props

  return (
    <ul>
      {
        todos && todos.map(todo => (
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
