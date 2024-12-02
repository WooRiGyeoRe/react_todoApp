import React from 'react';

const Immer_example = () => {
  const baseState = [
    { title: 'Learn React', done: false },
    { title: 'Learn Immer', done: false },
  ];

  // 상태 업데이트
  const nextState = baseState
    .map((item, index) => {
      if (index === 0) {
        // 첫 번째 작업 완료
        return { ...item, done: true };
      }
      return item;
    })
    .concat({ title: 'Learn TypeScript', done: false }); // 새 작업 추가

  console.log('Base State:', baseState);
  console.log('Next State:', nextState);
};

export default Immer_example;
