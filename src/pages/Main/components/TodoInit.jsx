import React, { useState } from 'react';
import { CheckInit } from './CheckInit';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const TodoInit = ({ list, allRemoveTodo }) => {
  const [isRemove, setIsRemove] = useState(false);
  const handleCheckRemove = (data) => {
    //
    setIsRemove(data);
  };

  return (
    <div>
      {isRemove ? (
        <CheckInit
          list={list}
          allRemoveTodo={allRemoveTodo}
          handleCheckRemove={handleCheckRemove}></CheckInit>
      ) : (
        <RemoveButton onClick={() => handleCheckRemove(true)}>
          전체 삭제
        </RemoveButton>
      )}
    </div>
  );
};

const RemoveButton = styled.button`
  position: relative;
  border: 0;
  width: 530px;
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-Size: ${customSize.mainFontSize};
  background-color: ${customColor.deleteColor};
  color: ${customColor.subFontColor}}
`;
