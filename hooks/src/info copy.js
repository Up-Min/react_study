import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state /* 객체 state를 그대로 복사해 옴 */,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  /* 객체로 할당 */

  const onChange = (e) => {
    console.log(e.target);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b> 이름 : </b> {name}
        </div>
        <div>
          <b> 닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
