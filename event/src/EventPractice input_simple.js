import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  /* 조금 더 깔끔하게 하는 방법, 화살표 함수 이용*/
  /* const를 선언하지 않음. 작동은 똑같이 한다 */

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h1> 테스트입니다. </h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}

export default EventPractice;
