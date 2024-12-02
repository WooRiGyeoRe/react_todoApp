import React from 'react';
import kingHamsterImage from '../assets/png/kingHamster.png';
import chuuImage from '../assets/png/chuu.png';
import mini2Image from '../assets/png/mini2.png';
import happyjockjjabImage from '../assets/png/happyjockjjab.jpg';

// const MapComponents_practice = () => {
//   const Team = ({ character }) => {
//     return <h1>나는 리액트 스터디 팀원 {character}</h1>;
//   };

//   const TeamCharacter = [
//     {
//       character: '인수',
//       image: kingHamsterImage,
//     },
//     {
//       character: '한솔',
//       image: chuuImage,
//     },
//     {
//       character: '겨레',
//       image: mini2Image,
//     },
//     {
//       character: '정선',
//       image: happyjockjjabImage,
//     },
//   ];

//   return (
//     <div>
//       <h1>방가방가!</h1>
//       <h3>공부는 어려워요...ㅠㅠ</h3>
//       <div>
//         {TeamCharacter.map((myCharacter) => (
//           <Team character={myCharacter.character} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MapComponents_practice;

// return (
//     <div>
//       <h1>방가방가!</h1>
//       <h3>공부는 어려워요...ㅠㅠ</h3>
//       <Team character="대장" />
//       <Team character="미니미니" />
//       <Team character="에비츄" />
//       <Team character="행복족젭" />
//     </div>
//   );

const MapComponents_practice = () => {
  // Team 컴포넌트에 image prop을 전달하고, 이미지도 함께 렌더링
  const Team = ({ character, image }) => {
    return (
      <div>
        <h1>나는 리액트 스터디 팀원 {character}</h1>
        <img src={image} alt={character} /> {/* 이미지 렌더링 */}
      </div>
    );
  };

  // TeamCharacter 배열에 각 팀원의 이름과 이미지 정보 추가
  const TeamCharacter = [
    {
      character: '인수',
      image: kingHamsterImage,
    },
    {
      character: '한솔',
      image: chuuImage,
    },
    {
      character: '겨레',
      image: mini2Image,
    },
    {
      character: '정선',
      image: happyjockjjabImage,
    },
  ];

  return (
    <div>
      <h1>방가방가!</h1>
      <h3>공부는 어려워요...ㅠㅠ</h3>

      {/* TeamCharacter 배열을 map으로 순회하며 각 팀원과 이미지를 전달 */}
      <div>
        {TeamCharacter.map((myCharacter) => (
          <Team
            key={myCharacter.character} // key 값 추가 (고유한 값을 사용함)
            character={myCharacter.character} // character props 추가
            image={myCharacter.image} // image props 추가
          />
        ))}
      </div>
    </div>
  );
};

export default MapComponents_practice;
