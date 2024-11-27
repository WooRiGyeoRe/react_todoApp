import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md'; // 아이콘 사용
import './TodoInsert.scss';

// [ 아이콘 사용 방법 ]
// 사이트에서 사용하고 싶은 아이콘을 고르고, import 구문을 사용하여 불러옴
// 예시 : import { 아이콘 이름 } from 'react-icons/md';

const TodoInsert = () => {
  // value 상태 정의 (input 입력값 관리)
  const [value, setValue] = useState('');

  // input에 넣을 함수
  // 재사용을 위해 useCallback 훅 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      {/* placeholder => 입력 필드(input, textarea 등)의 힌트 텍스트 */}
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
