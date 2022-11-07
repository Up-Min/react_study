/* functional Component */

import React, { useState } from 'react';
/* 2. useState 가져옴 */
const EventPractice = () => {
  const [username, setUsername] =
    useState(''); /* 1. useState 할 이름, 변경 변수 선언 */
  const [message, setMessage] = useState('');

  /* 3. username, Message 내용 바꿔주는 함수 선언
     username의 state값을 바꾸는 역할을 함.*/
  const onChangeUsername = (e) => {
    return setUsername(e.target.value);
  };
  const onChangeMessage = (e) => {
    return setMessage(e.target.value);
  };

  /* 4. 클릭했을 때 username, message를 내보내줌 + 값 초기화 */
  const onClick = (e) => {
    alert(username + ' : ' + message);
    setUsername('');
    setMessage('');
  };

  /* 5. 엔터값 지정 */
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1> 테스트입니다. </h1>
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력"
        /* 6. 위에서 지정했던 대로 input 속성 수정 */
        value={username}
        onChange={onChangeUsername}
        onKeyPress={onKeyPress}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        /* 6.1 동일함 onChangeMessage, onKeyPress */
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>
      {/* 7. 확인에 onclick 넣어줌 */}
      <button onClick={onClick}> 확인 </button>
    </div>
  );
};

export default EventPractice;
