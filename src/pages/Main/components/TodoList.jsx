import React from 'react';
import { TodoInfo } from './TodoInfo';

export const TodoList = ({ list, removeTodo, updateTodo }) => {
  return (
    <div>
      <ul>
        {list.map((data) => (
          <li key={data.id}>
            <TodoInfo
              list={data}
              removeTodo={removeTodo}
              updateTodo={updateTodo}></TodoInfo>
          </li>
        ))}
      </ul>
    </div>
  );
};
