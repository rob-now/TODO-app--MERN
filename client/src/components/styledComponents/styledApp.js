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
  box-sizing: border-box;
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`

export const StyledTodoButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background: rgba(0, 140, 206);
`

export const StyledTodo = styled.div`
  width: 220px;
  height: 100%;
  // min-height: 150px;
  background: #eee;
  margin: 20px;
`
export const StyledTodoContainer = styled.div`
  // position: absolute;
  // top: 15px;
  // bottom: 15px;
  // left: 15px;
  // right: 15px;
  // visibility: hidden;
  // opacity: 0;
  width: 100%;
  min-height: 180px;
  color: #fff;
  background: rgba(0, 140, 206, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity .3s;
  &:hover {
    background: blue;
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`
