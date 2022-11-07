import React, { useState } from 'react';

const EventPracticeCopy = () => {
  const [userId, setUserId] = useState(' ');
  const [userPwd, setUserPwd] = useState(' ');

  const changeUserId = (e) => {
    return setUserId(e.target.value);
  };
  const changeUserPwd = (e) => {
    return setUserPwd(e.target.value);
  };

  const onClick = (e) => {
    if (userId === '') {
      alert(userId + '가 없음!');
    } else if (userPwd === '') {
      alert(userPwd + '가 없음!');
    } else {
      alert(userId + ':' + userPwd);
    }
    setUserId('');
    setUserPwd('');
  };

  const onKeyPress = (e) => {
    if (e.value === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1> 입력 테스트 </h1>
      <input
        type="text"
        name="userId"
        value={userId}
        placeholder="아이디 입력"
        onChange={changeUserId}
        onKeyPress={onKeyPress}
      ></input>
      <input
        type="text"
        name="userPwd"
        value={userPwd}
        placeholder="비밀번호 입력"
        onChange={changeUserPwd}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}> 버튼 </button>
    </div>
  );
};

export default EventPracticeCopy;
