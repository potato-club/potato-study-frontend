import React from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const CheckInit = ({
  isRemove,
  list,
  allRemoveTodo,
  handleCheckRemove,
}) => {
  const CheckRemove = (e) => {
    if (e.target.name === 'yes') {
      allRemoveTodo(list);
      handleCheckRemove(false);
    } else {
      handleCheckRemove(false);
    }
  };
  return (
    <Modal isOpen={isRemove} style={styledRemoveModal}>
      <CheckRemoveBoxContext>정말 전부 삭제하시겠습니까?</CheckRemoveBoxContext>
      <CheckRemoveButtonBox>
        <WaitButton onClick={CheckRemove} name="no">
          잠깐...!
        </WaitButton>
        <RemoveButton onClick={CheckRemove} name="yes">
          두번 말하지 않겠다.
        </RemoveButton>
      </CheckRemoveButtonBox>
    </Modal>
  );
};

const styledRemoveModal = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    alignItems: 'center',
    borderRadius: customSize.boxBorderRadius,
    backgroundColor: customColor.boxColor,
  },
};

const CheckRemoveBoxContext = styled.p`
  position: relative;
  margin: 0;
  line-height: 100px;
  font-size: ${customSize.mainFontSize};
`;
const CheckRemoveButtonBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WaitButton = styled.button`
  position: relative;
  border: 0;
  width: 240px;
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
  width: 240px;
  height: ${customSize.miniButtonHeight};
  border-bottom-right-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.deleteColor};
  color: ${customColor.subFontColor};
  cursor: pointer; ;
`;
