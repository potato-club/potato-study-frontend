import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TodoBoard } from './components';


const TodoMian = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState("");
  const nextId = useRef(0);

  useEffect(() => {
    nextId.current += 1;
  }, [todo])

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  const deleteTodo = (id) => {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
  }

  const changeTodo = (id, text) => {
    setTodo((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            id,
            text,
          };
        }
        return todo;
      }),
    );
  }


  return (
    <Wrapper>
      <Title>TodoList</Title>
      <ResetButton onClick={() => { setTodo([]); nextId.current = 0; }}>초기화</ResetButton>
      <InputBox placeholder="할일을 입력해주세요" onChange={handleChangeInput} />
      <InputButton onClick={() => setTodo([...todo, { id: nextId.current, text: inputValue }])}>저장</InputButton>
      <TodoBoard
        todo={todo}
        deleteTodo={deleteTodo}
        changeTodo={changeTodo}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.p`
  text-align: center;
  font-size: 64px;
  color: skyblue;
`

const ResetButton = styled.button`
  width: 9%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border-top-left-radius: 64px;
  border-bottom-left-radius: 64px;
  border: none;
  margin: 8px;
`

const InputBox = styled.input`
  width: 40%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border: none;
  outline: none;
  text-indent: 32px;
`

const InputButton = styled.button`
  width: 9%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border-top-right-radius: 64px;
  border-bottom-right-radius: 64px;
  border: none;
  margin: 8px;
`

export default TodoMian;