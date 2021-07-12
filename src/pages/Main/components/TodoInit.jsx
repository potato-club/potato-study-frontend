import React, { useState } from 'react';
import { CheckInit } from './CheckInit';

export const TodoInit = ({ list, allRemoveTodo }) => {
  const [isRemove, setIsRemove] = useState(false);
  const handleCheckRemove = (data) => {
    //
    setIsRemove(data);
  };

  return (
    <div>
      <button onClick={() => handleCheckRemove(true)}>전체 삭제</button>
      {isRemove && (
        <CheckInit
          list={list}
          allRemoveTodo={allRemoveTodo}
          handleCheckRemove={handleCheckRemove}></CheckInit>
      )}
    </div>
  );
};
