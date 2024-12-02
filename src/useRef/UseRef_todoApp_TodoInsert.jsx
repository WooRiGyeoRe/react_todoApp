import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // 아이콘 사용
import '../TodoInsert.scss';

const UseRef_todoApp_TodoInsert = ({ onInsert }) => {
  // value => 현재 상태 값 (사용자가 입력한 값).
  // setValue => value를 업데이트하는 함수.
  const [value, setValue] = useState(''); // 초기값은 빈문열

  // onChange 함수 => input 필드에서 값이 변경될 때마다 호출됨
  const onChange = useCallback((e) => {
    // e.target.value => input에 입력된 값을 전달 받고
    // 그 값을 value 상태로 업데이트함.
    setValue(e.target.value);
  }, []);

  // onSubmit 함수 => 폼을 제출했을 때 호출됨
  const onSubmit = useCallback(
    (e) => {
      // 자식 컴포넌트인 UseRef_todoApp_TodoInsert에서 이 onInsert(value)를 호출하면,
      // 입력된 텍스트가 부모 컴포넌트로 전달됨.
      onInsert(value);
      setValue(''); // 새 할일 제출 후, value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴.
      // 이를 방지하기 위해 preventDefault 함수를 호출함.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
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

export default UseRef_todoApp_TodoInsert;
