import React from 'react';

export const TodoInit = ({ list, allRemoveTodo }) => {
  const handleAllRemove = () => {
    allRemoveTodo(list);
  };

  return <button onClick={handleAllRemove}>전체 삭제</button>;
};
