import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

// cn 함수 => 여러 클래스 이름을 조합하는 도구
// 인자에 들어간 값이 true면 class로 넣어주고, false면 안 넣어줌.
// className에 true에 해당하는 값은 추가로 표시가 되고,
// false가 된다면 className에 적용되지 않음!

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div /> */}

      {/*
      - checked가 true =>  <div className="checkbox checked"> 
      - checked가 false => <div className="checkbox"> 
      */}
      <div className={cn('checkbox', { checked })}>
        {/* 삼항연산자 
            => checked가 true면 MdCheckBox, false면 MdCheckBoxOutlineBlank
         */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
