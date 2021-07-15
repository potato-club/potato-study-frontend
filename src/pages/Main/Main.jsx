import React, { useState, useRef, useEffect } from 'react';
import { TodoPlus, TodoList, TodoInit } from './components/index';
import { Layout } from 'components/Layout';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const App = () => {
  const [list, setList] = useState([]);
  const setId = useRef(0);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current !== undefined &&
      scrollRef.current !== null &&
      scrollToBottom();
  }, [list]);

  const createTodo = (text) => {
    setList((list) => list.concat({ id: setId.current, text }));
    setId.current += 1;
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
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <Section>
        <TodoInit list={list} allRemoveTodo={allRemoveTodo} />
        <TodoList
          scrollRef={scrollRef}
          list={list}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoPlus createTodo={createTodo} />
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  position relative;
  width: 60%;
  height: 100%;
  padding: 40px;
  text-align: center;
  background-color: ${customColor.main};
`;
export default App;
