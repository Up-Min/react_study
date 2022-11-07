import React, { useState } from 'react';

const LiterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText /* names뒤에 계속 넣어주는 아이들*/,
    });

    setNextId(nextId + 1); /* nextId를 하나씩 증가시켜줌 */
    setNames(nextNames);
    setInputText(''); /* inputtext를 빈 문자열로 만들어줌 */
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
      }}
      /* 더블클릭시에 onRemove가 실행됨  
      name.id가 없어진다. 그러면 onRemove = (id) 에 선택한 아이의 id가 들어가고(26번줄),
      최초에 선언한 애들과 들어간 id를 모두 찾고(5번줄), 숫자가 다른 아이들은 그래도 리턴시킨다(27번줄)
      그리고 리턴된 나머지 값은 그대로 setNames에 나오니 눈으로는 표가 남은 것으로 보인다 (28번줄,51번줄)
      */
    >
      {name.text}{' '}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />{' '}
      <button onClick={onClick}> 추가 </button>
      <ul>{nameList}</ul>
    </>
  );
};

export default LiterationSample;
