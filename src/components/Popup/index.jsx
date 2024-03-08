import React from 'react';

function Popup({ mbti, onClose }) {
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h2>사용자의 MBTI 정보:</h2>
        <p>{mbti}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Popup;