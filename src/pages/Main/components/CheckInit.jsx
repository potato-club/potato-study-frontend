import React from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const CheckInit = ({ list, allRemoveTodo, handleCheckRemove }) => {
  const CheckRemove = (e) => {
    if (e.target.name === 'yes') {
      allRemoveTodo(list);
      handleCheckRemove(false);
    } else {
      handleCheckRemove(false);
    }
  };
  return (
    <div>
      <CheckRemoveBox>
        <CheckRemoveBoxContext>
          정말 전부 삭제하시겠습니까?
        </CheckRemoveBoxContext>
        <CheckRemoveButtonBox>
          <WaitButton onClick={CheckRemove} name="no">
            잠깐...!
          </WaitButton>
          <RemoveButton onClick={CheckRemove} name="yes">
            두번 말하지 않겠다.
          </RemoveButton>
        </CheckRemoveButtonBox>
      </CheckRemoveBox>
    </div>
  );
};
const CheckRemoveBox = styled.div`
  margin: auto;

  background-color: ${customColor.boxColor};
  border-radius: ${customSize.boxBorderRadius};
  width: ${customSize.bigButtonWidth};
  height: 100px;
`;
const CheckRemoveButtonBox = styled.div`
  display: flex;
`;
const CheckRemoveBoxContext = styled.p`
  margin: 0;
  font-size: ${customSize.mainFontSize};
`;
const WaitButton = styled.button`
  position: relative;
  border: 0;
  width: 530px;
  height: ${customSize.miniButtonHeight};
  border-bottom-left-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.updateColor};
  color: ${customColor.mainFontColor};
  cursor: pointer;
`;
const RemoveButton = styled.button`
  position: relative;
  border: 0;
  width: 530px;
  height: ${customSize.miniButtonHeight};
  border-bottom-right-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.deleteColor};
  color: ${customColor.subFontColor};
  cursor: pointer; ;
`;
