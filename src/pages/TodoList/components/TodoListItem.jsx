import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const TodoListItem = ({ text, id, deleteTodo }) => {
  const item = useRef();
  useEffect(() => {
    item.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [id]);
  return (
    <Item ref={item}>
      {text}
      <ButtonBox>
        <ChageTextButton>수정</ChageTextButton>
        <DeleteButton onClick={() => deleteTodo(id)}>
          <RiDeleteBin5Line />{' '}
        </DeleteButton>
      </ButtonBox>
    </Item>
  );
};
const Item = styled.li`
  background-color: #76d275;
  display: flex;
  justify-content: space-between;
  border: 3px solid gray;
  padding-left: 16px;
  margin-bottom: 16px;
  height: 40px;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
const ChageTextButton = styled.button`
  margin-right: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.5s;
  user-select: none;
  &:hover {
    transform: scale(1.2);
    color: red;
  }
`;

const DeleteButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;
