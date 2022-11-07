import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
      break;
    /* increment라는 값이 들어왔을 때 증가 된 값을 내보냄 */
    case 'DECREMENT':
      return { value: state.value - 1 };
      break;
    /* decrement라는 값이 들어왔을 때 감소 된 값을 내보냄 */
    default:
      return state;
      break;
    /* 아무것도 없으면 그냥 state를 내보냄 */
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  /* value라는 애는 알아서 state로 들어감 */

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>이실예정이신 예정 ㅎ
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        {' '}
        +1{' '}
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        {' '}
        -1{' '}
      </button>
      {/* dispatch - 함수처럼 사용할 수 있는 애, 보내다 */}
    </div>
  );
};

export default Counter;
