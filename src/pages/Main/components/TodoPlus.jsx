import React, { useRef, useState } from 'react';

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
      <input
        value={textInput}
        placeholder={'aaa'}
        onChange={handleChange}
        ref={focusInputRef}
        onKeyPress={(e) => e.key === 'Enter' && handlePlus(e)}></input>
      <button onClick={handlePlus}>추가</button>
      {!isContext && (
        <div>
          내용을 입력해주세요.
          <button onClick={() => setIsContext(true)}>확인</button>
        </div>
      )}
    </div>
  );
};
