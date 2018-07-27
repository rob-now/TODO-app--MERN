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

export const StyledAddTodoContainer = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledAddTodoInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSubmitButton = styled.button`
  border-radius: 100%;
  border: none;
  background: #3a3;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 30px;
  height: 30px;
  outline: none;
  margin-left: 5px;
  &:hover {
    box-shadow: 0 0 5px black;
    cursor: pointer;
  }
`

export const StyledTodos = styled.div`
  box-sizing: border-box;
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`

export const StyledTodo = styled.div`
  width: 220px;
  height: 100%;
  // min-height: 150px;
  background: #eee;
  margin: 20px;
`

export const StyledTodoContainer = styled.div`
  width: 100%;
  min-height: 180px;
  color: #fff;
  background: ${props => (props.isDone ? 'rgba(43, 170, 43, 0.9)' : 'rgba(0, 140, 206, 0.7)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  &:hover {
    background: ${props => (props.isDone ? 'rgba(43, 170, 43, 0.8)' : 'rgba(0, 140, 206, 0.8)')};
  }
`

export const StyledInputContainer = StyledTodoContainer.extend`
  justify-content: flex-start;
`

export const StyledTodoButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background: rgba(0, 140, 206);
  // opacity: 0.9;
  border-radius: 0 0 5px 5px;
  // &:hover {
  //   opacity: 1;
  // }
`

const Button = styled.button`
  width: 80px;
  height: 30px;
  color: #fff;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border-color: #eee;
  }
`

export const StyledEditButton = Button.extend`
`
export const StyledRemoveButton = Button.extend`
  background: #c33;
`

export const StyledUpdateButton = Button.extend`
  background: #3a3;
`

export const StyledCancelButton = StyledRemoveButton.extend`
`

export const StyledTodoParagraph = styled.p`
  padding: 0 15px;
  font-size: 14px;
  margin: 10px 0;
`

export const StyledFormErrorParagraph = StyledTodoParagraph.extend`
  color: #aa2222;
`

export const StyledInput = styled.input`
  width: 80%;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
`

export const StyledAddTodoInput = StyledInput.extend`
  width: 30%;
  border: 2px solid rgba(0, 140, 206);
  outline: none;
  margin: 0;
`
