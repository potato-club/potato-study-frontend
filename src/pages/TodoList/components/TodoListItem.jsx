import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TextModal } from 'components/index';

export const TodoListItem = ({ text, id, deleteTodo }) => {
  const [itemText, setItemText] = useState(text);
  const item = useRef();
  useEffect(() => {
    item.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [id]);

  const [modifyed, setModifyed] = useState(false);

  const closeModifyModal = () => {
    setModifyed(false);
  };

  return (
    <Item ref={item}>
      <TextBox value={itemText} onChange={(e) => setItemText(e.target.value)} />
      <ButtonBox>
        <ChageTextButton onClick={() => setModifyed(true)}>
          수정
        </ChageTextButton>
        <DeleteButton onClick={() => deleteTodo(id)}>
          <RiDeleteBin5Line />{' '}
        </DeleteButton>
      </ButtonBox>
      <TextModal
        modalIsOpen={modifyed}
        closeModal={closeModifyModal}
        titleText={'수정 완료'}
        content={'수정이 완료되었습니다.'}
      />
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
const TextBox = styled.input`
  background: transparent;
  border: none;
  font-size: 24px;
  width: 840px;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 5px solid green;
  }
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
