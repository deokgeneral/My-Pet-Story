import React, { useState } from 'react';
import Popup from '../components/Popup';
import mainimg from '../img/Mainimg.png';
import './index.css';

function Main() {
  const [usermbti, setUsermbti] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setUsermbti(e.target.value.toUpperCase());
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
            width: '100%',
            maxHeight: '500px',
            marginTop: '48px',
            backgroundPosition:'center'
          }}
        />
      </div>
      <div className='picket-container'>
        <div className='piket'>
          <h3>자신의 'MBTI' 를 입력하고,</h3>
          <span>반려견을 추천받으세요!</span>
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
      {showPopup && (
        <Popup mbti={usermbti} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Main;