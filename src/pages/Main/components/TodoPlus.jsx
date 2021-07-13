import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { customColor, customSize } from 'constants/index';

export const TodoPlus = ({ createTodo }) => {
  const [textInput, setTextInput] = useState('');
  const [isContext, setIsContext] = useState(true);
  const focusInputRef = useRef();
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handlePlus = (e) => {
    if (textInput.length === 0) {
      setIsContext(false);
    } else {
      createTodo(textInput);
      setTextInput('');
      setIsContext(true);
      focusInputRef.current.focus();
    }
  };
  return (
    <div>
      {!isContext && (
        <CheckContextBox>
          <CheckContexBoxContext>내용을 입력해주세요.</CheckContexBoxContext>
          <OkButton onClick={() => setIsContext(true)}>확인</OkButton>
        </CheckContextBox>
      )}
      <InputBox>
        <ContextInputBox
          value={textInput}
          placeholder={'aaa'}
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
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContextInputBox = styled.input`
  width: 450px;
  height: ${customSize.miniButtonHeight};
  border: 0;
  margin-right: 30px;
  border-radius: ${customSize.boxBorderRadius};
  &:focus {
    border-radius: ${customSize.boxBorderRadius};
  }
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
//============ Check Box ===================//
const CheckContextBox = styled.div`
  margin: auto;

  padding: 0 50px;
  background-color: ${customColor.boxColor};
  border-radius: ${customSize.boxBorderRadius};
  width: 400px;
  height: 230px;
`;
const CheckContexBoxContext = styled.p`
  margin: auto;
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
