import React, { useState } from 'react';
import { CheckInit } from './CheckInit';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const TodoInit = ({ list, allRemoveTodo }) => {
  const [isRemove, setIsRemove] = useState(false);
  const handleCheckRemove = (data) => {
    setIsRemove(data);
  };

  return (
    <SectionRemove>
      <CheckInit
        list={list}
        isRemove={isRemove}
        allRemoveTodo={allRemoveTodo}
        handleCheckRemove={handleCheckRemove}></CheckInit>
      <RemoveButton onClick={() => handleCheckRemove(true)}>
        전체 삭제
      </RemoveButton>
    </SectionRemove>
  );
};
const SectionRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RemoveButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  width: ${customSize.bigButtonWidth};
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.deleteColor};
  color: ${customColor.subFontColor};
  cursor: pointer;
`;
