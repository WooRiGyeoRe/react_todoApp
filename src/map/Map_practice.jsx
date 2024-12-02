import React from 'react';

const Map_practice = () => {
  const array = ['인수', '한솔', '겨레', '정선', '정재'];

  const index = array.map((element) => {
    return <li key={element}>{element}</li>; // key 설정
  });

  return <ul>{index}</ul>;
};
export default Map_practice;
