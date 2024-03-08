import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainimg from '../img/mainimg.png';
import './index.css';

function Main() {
  const [usermbti, setUsermbti] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsermbti(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/result/${usermbti.toUpperCase()}`);
  };

  const handleKeyPress = (Enter) => {
    if (Enter.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className='maincomtents'>
      <div className='mainimg'>
      <img
        src={mainimg}
        alt='메인이미지'
        style={{
        width: '77vw',
        maxHeight: '500px',
        margin:'48px 0 0 10px',
        }}
      />
      </div>
      <div className='picket-container'>
        <div className='piket'>
          <h3>자신의 'MBTI' 를 입력하고 반려견을 추천받으세요!</h3>
          <input
            autoComplete='off'
            type='text'
            value={usermbti}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='MBTI를 입력하세요.'
            className='textbox'
          />
          <button
          onClick={handleSubmit}
          type='button'
          className='resultbtn'
          >
          결과보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;