import React from 'react';
import mainimg from '../img/mainimg.jpg';
function Main() {
  return (
    <div>
      <div>
      <img
        src={mainimg}
        alt='메인이미지'
        style={{
        maxWidth: '90%',
        maxHeight: '550px',
        borderRadius: '25px' 
        }}
      />
      </div>
    </div>
  );
}

export default Main;