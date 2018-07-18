import React from 'react'

function TodoForm(props) {
  const { todoName, addTodo, handleChange } = props

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="form-todo-name">Todo name:
        <input
          id="form-todo-name"
          type="text"
          name="todoName"
          value={todoName}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
      >
        Add todo
      </button>
    </form>
  )
}

export default TodoForm
