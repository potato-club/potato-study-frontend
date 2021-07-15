import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const TodoInfo = ({ list, removeTodo, updateTodo, scrollRef }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [changeText, setChangeText] = useState();

  const handleChange = (e) => {
    setChangeText(e.target.value);
  };
  const handleUpdateButton = () => {
    if (!isUpdate) {
      setIsUpdate(true);
      setChangeText(list.text);
    } else {
      setIsUpdate(false);
      updateTodo(list.id, changeText);
    }
  };
  const handleRemoveButton = () => {
    removeTodo(list.id);
  };
  return (
    <SectionTodoInfo ref={scrollRef}>
      {isUpdate ? (
        <ContextUpdateBox
          value={changeText}
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
  padding-top: 20px;
`;
const ContextUpdateBox = styled.input`
  position: relative;
  display: flex;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: ${customSize.miniButtonHeight};
  margin-right: 10px;
  text-align: left;
  border: 2px solid ${customColor.plusColor};
  outline: none;
  padding-left: 20px;
  border-radius: ${customSize.boxBorderRadius};
  background-color: ${customColor.sub};
`;
const ContextBoxTodo = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: left;
  align-items: center;
  width: 400px;
  height: ${customSize.miniButtonHeight};
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: ${customSize.boxBorderRadius};
  background-color: ${customColor.sub};
`;
const ContextTodo = styled.span``;
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
