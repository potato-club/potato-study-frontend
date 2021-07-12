import React from 'react';

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
      <div>
        <p>정말 전부 삭제하시겠습니까?</p>
        <button onClick={CheckRemove} name="no">
          잠깐...!
        </button>
        <button onClick={CheckRemove} name="yes">
          두번 말하지 않겠다.
        </button>
      </div>
    </div>
  );
};
