import React, { Component } from 'react';
import './ValidateSample.css';

class ValidateSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  /* password의 값을 입력받은 값으로 바꿔줌 */
  handleChange = (e) => {
    this.setState({ password: e.tatget.value });
  };
  handleButtonClick = () => {
    this.setState({
      /* 2. state값이 0000일경우 validated에 true가 적용됨. */
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
    /* 이렇게 하면 input DOM 전체를 가져올 수 있음 */
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password} /* 1. 위의 state에서 지정해줘야함 */
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'fail'
              : ''
          }
          /* 버튼을 눌렀을 경우 +(validated 값이 트루냐 아니냐 인 여부) */
        ></input>
        <button onClick={this.handleButtonClick}> 검증하기 </button>
      </div>
    );
  }
}

export default ValidateSample;
