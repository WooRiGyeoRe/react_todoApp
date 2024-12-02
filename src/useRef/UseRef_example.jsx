import React, { useRef } from 'react';

const UseRef_example = () => {
  const counterRef = useRef(0);

  const counterUp = () => {
    counterRef.current += 1;
    console.log('Counter:', counterRef.current);
  };
  return (
    <div>
      <p>ref 값 : {counterRef.current}</p>
      <button onClick={counterUp}>counterUp 버튼</button>
    </div>
  );
};

export default UseRef_example;
