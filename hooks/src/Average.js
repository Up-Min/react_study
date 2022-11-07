import React, { useMemo, useState, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('계산중 ...');

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  /* 계산해주는 함수 reduce */
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  /* 숫자가 바뀔 때마다 일일이 함수가 렌더링 됨. 그걸 막기 위해 useCallBack이용 */
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus(); /* 포커스 함수 지정 */
    },
    [number, list]
  ); /* number, list바뀌었을 때 함수 생성 */

  /* 숫자가 바뀔 때마다 일일이 함수가 렌더링 됨. 그걸 막기 위해 useCallBack이용 */

  /* useMemo 이용하여 일일이 로그 안뜨게 하기 */
  const avg = useMemo(() => getAverage(list), [list]);
  /* useMemo를 이용해서, 값이 변경될 때만 실행함. 
  즉 값을 넣으려 일일이 숫자를 적을 때마다 로그가 찍히지는 않음 */

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
      <div>
        <b> 평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
