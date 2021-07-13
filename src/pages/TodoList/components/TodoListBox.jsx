import React from 'react';
import styled from 'styled-components';
import { TodoListItem } from './index';

export const TodoListBox = ({ deleteTodo, todos }) => {
  return (
    <List>
      {todos.map(({ text, id }) => (
        <TodoListItem text={text} id={id} deleteTodo={deleteTodo} />
      ))}
    </List>
  );
};
const List = styled.ul`
  height: 850px;
  font-size: 24px;
  list-style: none;
  overflow-y: auto;
  padding-left: 16px;
  margin: 20px;
`;
