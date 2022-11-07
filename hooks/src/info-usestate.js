import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   }); /* useEffect */

  /* useEffect 2. 업데이트 될 때만 effect가 뜨고, rendering 될 때는 안뜨게 함. */

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   }, []); /* 내용이 빈 배열을 하나 넣어줌 */

  /* useEffect 3. 특정 값이 변경 될 때만 뜨게 하는 방법 */
  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   }, [name]); /* 비어있던 배열 안에 인식할 특정 값을 넣어줌 */

  // useEffect 4. useEffect안에서 돌리는 함수 (뒷정리 함수)
  //   useEffect(() => {
  //     console.log('effect');
  //     console.log({ name });
  //     return () => {
  //       console.log('cleanup');
  //       console.log(name);
  //     }; /* useEffect를 사용할 때 함수를 사용하면 렌더링이 되기 전에 return이 먼저 실행된다!
  //     즉, 렌더링 되기전에 특정 작업을 주고 싶은 경우에 쓰면 좋다 */
  //   }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  /* 1. 두개의 이벤트 함수를 만들어줌 */

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
        {/* value를 onchange로 넣어둠, 변화를 받는 함수 */}
        {/* 2. 이벤트 함수를 input onchange에 넣어둠 */}
      </div>
      <div>
        {/* 이름 입력하면 이름이, 닉네임 입력하면 닉네임이 나와야한다. 어떻게 해야할까? */}

        <div>
          <b> 이름 : </b> {name} {/* 이렇게 하면 바로 변수 지정이 된다. */}
        </div>
        <div>
          <b> 닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
