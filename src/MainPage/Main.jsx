import React from 'react';
import mainimg from '../img/mainimg.jpg';
function Main() {
  return (
    <div>
      <img
        src={mainimg}
        alt="메인이미지"
        style={{
          width: '100%',
          border: '2px solid black', 
          borderRadius: '5px'
        }}
      />
    </div>
  );
}

export default Main;