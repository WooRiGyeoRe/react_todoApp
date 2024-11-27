import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove }) => {

  return (
    <div className="TodoList">
      {/* todos 배열이 TodoList에 props로 전달되면서 3번 작성할 필요가 없어짐!*/}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}

      {/* 대신에... props로 받아 온 todos 배열을 배열 내장 함수 map을 사용해 TodoListItem으로 이루어진 배열로 변환해서 렌더링!*/}
      {/* - map을 사용해 컴포넌트로 변환할 때 => key props를 전달해줘야 함. 
          - key 값은 각 항목마다 가지고 있는 고윳값인 id를 넣어줬음.
      */}
      {/* todo 데이터는 통째로 props로 전달 => 여러 종류의 값 전달 시, 추후 성능 최적화할 때 편리 */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
