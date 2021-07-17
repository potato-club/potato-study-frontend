import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TodoListBox } from './components';
import { TextModal } from 'components/index';
import { customColor } from 'constants/index';

const TodoList = () => {
  const focusing = useRef();
  const [text, setText] = useState('');
  const nextId = useRef(0);
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      addTodo(text);
    }
  };
  const addTodo = (text) => {
    if (text.length === 0) {
      openModal();
      return;
    }
    const newTodo = {
      text,
      id: nextId.current,
    };
    nextId.current += 1;
    // setTodos(todos.concat(newTodo));
    setTodos((cur) => [...cur, newTodo]);
    setText('');
    focusing.current.focus();
  };

  const deleteTodo = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e);
    setTodos(newTodos);
  };

  const onChangeValue = (e) => {
    setText(e.target.value);
  };

  const allDeleteTodos = () => {
    setTodos([]);
  };
  return (
    <Wrapper>
      <Header>
        To Do List
        <AllDeleteButton onClick={allDeleteTodos}>전체삭제</AllDeleteButton>
      </Header>
      <TodoListBox deleteTodo={deleteTodo} todos={todos} />
      <Footer>
        <InputBox
          onChange={onChangeValue}
          value={text}
          placeholder="할 일을 작성하세요"
          ref={focusing}
          onKeyPress={(e) => pressEnter(e)}
        />
        <AddButton onClick={() => addTodo(text)}>추가</AddButton>
      </Footer>
      <TextModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        titleText={'주의'}
        content={'할일을 입력하고 추가 버튼을 누르세요'}
      />
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  text-align: center;
  border-radius: 64px 64px 0px 0px;
  width: 1080px;
  height: 1000px;
  margin: auto;
  background-color: #dfd9d9;
  box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
  -webkit-box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
  -moz-box-shadow: 29px 23px 18px -6px rgba(197, 197, 197, 1);
`;

const Header = styled.div`
  width: 100%;
  height: 52px;
  color: white;
  background: ${customColor.green};
  font-size: 24px;
  font-weight: bold;
  border-radius: 64px 64px 0 0;
  margin-top: 20px;
  padding-top: 16px;
  user-select: none;
`;
const AllDeleteButton = styled.button`
  margin-left: 800px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
    color: red;
  }
`;
const Footer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
`;

const InputBox = styled.input`
  flex: 1 1 80%;
  height: 40px;
  outline: none;
  border: none;
  font-size: 32px;
  padding-left: 10px;
`;
const AddButton = styled.button`
  flex: 1 1 20%;
  color: white;
  font-weight: bold;
  font-size: 28px;
  cursor: pointer;
  border: none;
  background: ${customColor.green};
  user-select: none;
  &:hover {
    color: yellow;
  }
`;
