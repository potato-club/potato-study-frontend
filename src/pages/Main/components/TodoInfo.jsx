import React, { useState } from 'react';

export const TodoInfo = ({ list, removeTodo, updateTodo }) => {
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
    <div>
      {isUpdate ? (
        <input value={changeText} onChange={handleChange}></input>
      ) : (
        <span>{list.text}</span>
      )}
      <button onClick={handleUpdateButton}>{isUpdate ? '적용' : '수정'}</button>
      <button onClick={handleRemoveButton}>삭제</button>
    </div>
  );
};
