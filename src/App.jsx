import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';

const App = () => {
  // 'todos'라는 상태 정의
  // 'todos' 배열 안에 있는 객체 => 각 항목의 고유 id, 내용, 완료 여부를 알려 주는 값
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      {/* todos 배열을 TodoList로 전달 */}
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
