import React, { useCallback, useState, useRef } from 'react';
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

  // 고윳값으로 사용될 id
  // ref를 사용해 nextId 변수를 정의함 => 새로운 할 일(Todo)에 고유 ID 부여
  /* 초기값은 4 => 컴포넌트 리렌더링되도 유지됨!!! 
     => useRef를 사용하면 값이 변경되어도 컴포넌트가 다시 렌더링되지 않음! (useState와 다른점)  */
  const nextId = useRef(4);

  // 할일 추가
  const onInsert = useCallback(
    // useCallback을 사용해 todos 배열이 변경될 때만 함수가 새로 생성되게 함.
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false, // 할 일이 완료되지 않았으므로 초기값은 false
      };
      // setTodos로 기존 todos 배열에 새 todo를 추가함.
      // concat 메서드로 기존 배열에 새 객체를 추가한 새로운 배열을 반환
      setTodos(todos.concat(todo));
      nextId.current + 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // 할일 지우기
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 할일 수정
  // [todos] 배열이 변경될 때만 새로 생성됨
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map(
          (todo) =>
            todo.id === id
              ? { ...todo, checked: !todo.checked } // 조건 만족 시 `checked` 상태 토글
              : todo, // 조건 불만족 시 기존 객체 유지
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* todos 배열을 TodoList로 전달 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
