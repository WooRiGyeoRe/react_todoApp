import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const UseRef_todoApp_App = () => {
  /* todos 배열 안에 들어 있는 객체 
     => 각 항목의 고유 id, 내용, 완료 여부를 알려 주는 값이 있음.
  */
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
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

  // nextId라는 useRef 객체를 생성
  // 초기값은 4
  const nextId = useRef(4);

  const onInsert = useCallback(
    // text 값을 받아 todo 객체를 생성해 todos 배열에 추가
    (text) => {
      const todo = {
        id: nextId.current, // nextId.current 값을 사용해 고유 ID 생성
        text, // 입력받은 text 값
        checked: false, // 기본 checked 값은 false
      };

      // 새로운 배열을 setTodos 함수에 전달해 todos 상태를 업데이트
      // concat => 원본 배열을 변경하지 않고, 새로운 배열을 반환
      setTodos(todos.concat(todo)); //  새로운 todo 배열을 todos 배열에 추가

      // useRef로 생성된 객체 nextId의 current 속성 값에 1씩 더함
      nextId.current += 1;
    },
    [todos], // 의존성 배열 => todos 배열이 변경될 때만 onInsert 함수가 새로 생성됨
  );

  return (
    <TodoTemplate>
      {/* <TodoInsert /> */}
      <TodoInsert onInsert={onInsert} />
      {/* <TodoList /> */}
      {/* todos 배열을 TodoList로 전달 */}
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default UseRef_todoApp_App;
