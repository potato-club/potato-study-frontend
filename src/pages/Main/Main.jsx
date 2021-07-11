import React, { useState } from 'react';
import { TodoPlus } from 'components/TodoPlus';
import { TodoList } from 'components/TodoList';
import { TodoInit } from 'components/TodoInit';

const App = () => {
  const [list, setList] = useState([{ id: 0, text: '러닝뛰기' }]);
  const [id, setId] = useState(1);

  const createTodo = (text) => {
    setList((list) => list.concat({ id: id, text }));
    setId((id) => id + 1);
  };
  const removeTodo = (id) => {
    setList((list) => list.filter((list) => list.id !== id));
  };
  const updateTodo = (id, text) => {
    setList((list) =>
      list.map((list) => {
        if (list.id === id) {
          return {
            id,
            text,
          };
        }
        return list;
      }),
    );
  };
  const allRemoveTodo = () => {
    setList([]);
  };
  return (
    <div>
      <TodoPlus createTodo={createTodo} />
      <TodoInit list={list} allRemoveTodo={allRemoveTodo}></TodoInit>
      <TodoList list={list} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
