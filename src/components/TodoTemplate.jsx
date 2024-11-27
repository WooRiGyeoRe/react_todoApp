import React from 'react';
import './TodoTemplate.scss';

// children => 컴포넌트 내부에 전달된 자식 요소
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
