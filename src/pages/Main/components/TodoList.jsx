import React, { useState } from 'react';
import styled from 'styled-components';

export const TodoList = ({ id, text, deleteTodo, changeTodo }) => {
  const [changeText, setChangeText] = useState('')

  return (
    <ContentBox>
      {text}
      <DeleteTodoButton onClick={() => deleteTodo(id)} >삭제</DeleteTodoButton>
      <input onChange={(e) => setChangeText(e.target.value)} />
      <ChageTodoButon onClick={() => changeTodo(id, changeText)}>수정</ChageTodoButon>
    </ContentBox>
  )
}


const ContentBox = styled.div`
  width: 100%;
  height: 136px;
  background-color: rgb(180, 218, 233) ;
  font-size: 64px;
  padding-top: 32px;
  margin-top: 16px;
`

const DeleteTodoButton =styled.button`
  float: right;
  height: 80%;
`

const ChageTodoButon = styled.button`
  float: right;
  height: 80%;
`