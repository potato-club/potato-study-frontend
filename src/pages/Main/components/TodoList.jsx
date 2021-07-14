import React from 'react';
import { TodoInfo } from './TodoInfo';
import styled from '@emotion/styled';

export const TodoList = ({ list, removeTodo, updateTodo }) => {
  return (
    <SectionTodoList>
      {list.map((data) => (
        <TodoInfo
          key={data.id}
          list={data}
          removeTodo={removeTodo}
          updateTodo={updateTodo}></TodoInfo>
      ))}
    </SectionTodoList>
  );
};

const SectionTodoList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px auto;
  padding: 0;
  flex-direction: column-reverse;
  overflow-y: auto;
  align-items: left;
  list-style: none;
  width: 600px;
  height: 700px;
`;
