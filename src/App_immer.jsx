// =================================
// 12장. immer 예제코드
// =================================
import React, { useRef, useCallback, useState } from 'react';
import { produce } from '../node_modules/immer/dist/immer'; // import produce from 'immer';

// 1-1) immer를 사용하지 않고 불변성 유지
// const App_immer = () => {
//   // 항목 고유 id 생성 , 초기값 = 1
//   const nextId = useRef(1);

//   // 입력 필드(name, username) , 초깃값 = 각각 ''
//   const [form, setForm] = useState({ name: '', username: '' });

//   // 입력 데이터 저장 배열
//   // useState 기본 구조 => const [현재 상태값, 상태를 업데이트하는 함수] = useState(초기값);
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null,
//   });

//   // input 수정을 위한 함수
//   // onChange => 입력 필드의 값이 변경될 때 호출
//   const onChange = useCallback(
//     // e = 이벤트 객체
//     // e.target => 이벤트 발생 요소를 참조
//     (e) => {
//       const { name, value } = e.target;
//       setForm({
//         ...form,
//         [name]: [value],
//       });
//     },
//     [form],
//   );

//   // form 등록을 위한 함수
//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const info = {
//         id: nextId.current,
//         name: form.name,
//         username: form.username,
//       };

//       // array에 새 항목 등록
//       setData({
//         ...data,
//         array: data.array.concat(info),
//       });

//       // form 초기화
//       setForm({
//         name: '',
//         username: '',
//       });
//       nextId.current += 1;
//     },
//     [data, form.name, form.username],
//   );

//   // 항목을 삭제하는 함수
//   const onRemove = useCallback(
//     (id) => {
//       setData({
//         // ... => 객체나 배열을 펼쳐서 복사 or 그 내부의 요소를 분리
//         // 기존 data 객체의 모든 속성을 복사한다는 뜻
//         ...data,
//         array: data.array.filter((info) => info.id !== id), // array 속성을 새로운 값으로 덮어쓰기
//       });
//     },
//     [data],
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );

// 1-2) 간단 예제
const App_immer = () => {
  // useState 기본 구조 => const [현재 상태값, 상태를 업데이트하는 함수] = useState(초기값);
  const [data, setData] = useState([1, 2, 3]);

  // 항목 추가 버튼 누르면 item이 추가됨
  // [1] 배열의 불변성 유지 => 새로운 배열을 만들어서 상태를 업데이트
  {
    /*
  const addItem = () => {
    // setData => data 상태 업데이트
    // [...data] => 기존 배열을 복사해서 새로운 배열을 만듦
    setData([...data, data.length + 1]);
  };
 */
  }

  // [2] immer 적용
  const addItem = () => {
    setData(
      produce(data, (draft) => {
        draft.push(data.length + 1);
      }),
    );
  };

  // 내가 생각했던 코드... 왜 동작 안 할까???
  // const addItem = produce(setData, (draft) => {
  //   draft.push(data.length + 1);
  // });

  return (
    <div>
      <button onClick={addItem}>항목 추가</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App_immer;
