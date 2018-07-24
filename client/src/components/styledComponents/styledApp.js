import styled from 'styled-components'

export const StyledApp = styled.div`
  text-align: center;
`

export const StyledAppHeader = styled.div`
background-color: #222;
  padding: 20px;
  margin-bottom: 50px;
  color: white;
`

export const H1 = styled.h1`
  font-size: 1.5em;
`

export const StyledTodos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledTodoButtonsContainer = styled.div`
  // display: none;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`

export const StyledTodo = styled.div`
  width: 220px;
  height: 100%;
  min-height: 220px;
  background: #eee;
  margin: 20px;
  // &:hover ${StyledTodoButtonsContainer}{
  //   display: flex;
  // }
`
