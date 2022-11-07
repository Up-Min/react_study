import useInputs from './useinputs';

const Info = () => {
  /* useInput에 지정된 state, dispatch를 받아온다 */

  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

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
