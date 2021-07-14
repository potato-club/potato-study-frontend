import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const TodoInfo = ({ list, removeTodo, updateTodo }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [changeText, setChangeText] = useState();
  //const focusUpdateRef = useRef();
  //수정 버튼을 누르면 input창이 focus되게 만들려고 하는데 undefined에러뜸;
  const handleChange = (e) => {
    setChangeText(e.target.value);
  };
  const handleUpdateButton = () => {
    if (!isUpdate) {
      setIsUpdate(true);
      setChangeText(list.text);
      //focusUpdateRef.current.focus();
    } else {
      setIsUpdate(false);
      updateTodo(list.id, changeText);
    }
  };
  const handleRemoveButton = () => {
    removeTodo(list.id);
  };
  return (
    <SectionTodoInfo>
      {isUpdate ? (
        <ContextUpdateBox
          value={changeText}
          //ref={focusUpdateRef}
          onChange={handleChange}></ContextUpdateBox>
      ) : (
        <ContextBoxTodo>
          <ContextTodo>{list.text}</ContextTodo>
        </ContextBoxTodo>
      )}
      <UpdateButton onClick={handleUpdateButton}>
        {isUpdate ? '적용' : '수정'}
      </UpdateButton>
      <RemoveButton onClick={handleRemoveButton}>삭제</RemoveButton>
    </SectionTodoInfo>
  );
};
const SectionTodoInfo = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  padding-top: 20px;
`;
const ContextUpdateBox = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: ${customSize.miniButtonHeight};
  margin-right: 10px;
  text-align: left;
  border: 0;
  outline: none;
  padding-left: 20px;
  border-radius: ${customSize.boxBorderRadius};
  background-color: ${customColor.sub};
`;
const ContextBoxTodo = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 420px;
  height: ${customSize.miniButtonHeight};
  margin-right: 10px;
  padding-left: 20px;
  border-radius: ${customSize.boxBorderRadius};
  background-color: ${customColor.sub};
`;
const ContextTodo = styled.span`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  line-height: ${customSize.miniButtonHeight};
  vertical-align: middle;
`;
//================Buttons==================//
const UpdateButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  margin-right: 10px;
  width: ${customSize.miniButtonWidth};
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.updateColor};
  color: ${customColor.mainFontColor};
  cursor: pointer;
  ${(e) =>
    e.children === '적용' &&
    `background-color: ${customColor.plusColor}; color: ${customColor.subFontColor}`};
`;
const RemoveButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  width: ${customSize.miniButtonWidth};
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.deleteColor};
  color: ${customColor.subFontColor};
  cursor: pointer;
`;
