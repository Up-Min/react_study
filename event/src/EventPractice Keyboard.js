import React, { Component } from 'react';

/* 2개 이벤트 운용 */

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message + ':' + this.state.username);
    this.setState({ message: '', username: '' });
  };

  /* 1. 키보드 관련 이벤트, 이벤트 객체 선언 */
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick(); /* 2. 엔터를 칠 경우 핸들클릭 작동되도록 선언 */
    }
  };

  render() {
    return (
      <div>
        <h1> 테스트입니다. </h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} /* 3. keyPress 추가 */
        ></input>
        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}

export default EventPractice;
