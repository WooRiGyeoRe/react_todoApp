import React from 'react';
import { MdAdd } from 'react-icons/md'; // 아이콘 사용
import './TodoInsert.scss';

// [ 아이콘 사용 방법 ]
// 사이트에서 사용하고 싶은 아이콘을 고르고, import 구문을 사용하여 불러옴
// 예시 : import { 아이콘 이름 } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      {/* placeholder => 입력 필드(input, textarea 등)의 힌트 텍스트 */}
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
