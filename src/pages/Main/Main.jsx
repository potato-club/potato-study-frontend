import React, { useState } from 'react';
import { TodoPlus, TodoList, TodoInit } from './components/index';
import { Layout } from 'components/Layout';
const App = () => {
  const [list, setList] = useState([]);
  const [id, setId] = useState(1);

  const createTodo = (text) => {
    setList((list) => list.concat({ id: id, text }), console.log(list));
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
    <Layout>
      <TodoPlus createTodo={createTodo} />
      <TodoInit list={list} allRemoveTodo={allRemoveTodo} />
      <TodoList list={list} removeTodo={removeTodo} updateTodo={updateTodo} />
    </Layout>
  );
};

export default App;
