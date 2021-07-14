import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const TodoPlus = ({ createTodo }) => {
  const [textInput, setTextInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const focusInputRef = useRef();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handlePlus = (e) => {
    if (textInput.length === 0) {
      activeModal(true);
    } else {
      createTodo(textInput);
      setTextInput('');
      activeModal(false);
      focusInputRef.current.focus();
    }
  };
  const activeModal = (data) => {
    setIsActive(data);
  };

  return (
    <div>
      <Modal isOpen={isActive} style={styledModal}>
        <CheckContexBoxContext>내용을 입력해주세요.</CheckContexBoxContext>
        <OkButton onClick={() => activeModal(false)}>확인</OkButton>
      </Modal>
      <InputBox>
        <ContextInputBox
          value={textInput}
          placeholder={'내용을 입력'}
          onChange={handleChange}
          ref={focusInputRef}
          onKeyPress={(e) =>
            e.key === 'Enter' && handlePlus(e)
          }></ContextInputBox>
        <PlusButton onClick={handlePlus}>추가</PlusButton>
      </InputBox>
    </div>
  );
};

//============ Modal Box ===================//
const styledModal = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    borderRadius: customSize.boxBorderRadius,
    backgroundColor: customColor.boxColor,
  },
};
const CheckContexBoxContext = styled.p`
  font-size: ${customSize.mainFontSize};
`;
const OkButton = styled.button`
  position: relative;
  border: 0;
  width: ${customSize.miniButtonWidth};
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.updateColor};
  color: ${customColor.mainFontColor};
  cursor: pointer;
`;

//============ Input Box ===================//
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContextInputBox = styled.input`
  position: relative;
  width: 450px;
  height: ${customSize.miniButtonHeight};
  border: 0;
  padding-left: 20px;
  outline: none;
  margin-right: 30px;
  border-radius: ${customSize.boxBorderRadius};
`;
const PlusButton = styled.button`
  position: relative;
  border: 0;
  width: ${customSize.miniButtonWidth};
  height: ${customSize.miniButtonHeight};
  border-radius: ${customSize.boxBorderRadius};
  font-size: ${customSize.mainFontSize};
  background-color: ${customColor.plusColor};
  color: ${customColor.subFontColor};
  cursor: pointer;
`;
