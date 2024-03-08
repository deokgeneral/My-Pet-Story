import React from 'react';
import petInfo from '../../PetData.json';
import './index.css';

function Popup({ mbti, onClose }) {
  const recommendedPet = petInfo[mbti.toUpperCase()];


  const ErrorPopup = () => {
    return (
      <div className='popup'>
        <div className='popup-info'>
          <h2>에러!!!! 404</h2>
          <p>입력한 " {mbti} "에 대한 정보가 없습니다.</p>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    );
  };

  const PetInfo = () => {
    return (
      <div className='popup'>
        <div className='popup-info'>
          <h2>" <span>{mbti}</span> "의 추천 반려견은</h2>
          <h3>" <span>{recommendedPet.petName}</span> " 입니다.</h3>
          <img
            src={recommendedPet.petImage}
            alt={recommendedPet.petName}
            className='dogimg'
          />
          <p>설명:</p>
          <p><span>{recommendedPet.petContent}</span></p>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    );
  };

  return recommendedPet ? PetInfo() : ErrorPopup();
}

export default Popup;