import React, { Component } from 'react';

/* 2개 이벤트 운용 */

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
    /* 2. username 추가 */
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    /* 5. 기존에는 메세지 값만 바뀌었는데, 나는 두개를 바꾸고 싶음. 어떻게 해야하나? 
    message: e.target.value -> [e.target.name] : e.target.value 
    알아서 이벤트가 발생되는 e.target에서, name값 (username, message) 만 가져옴 */
  };

  handleClick = () => {
    /* 3. alert, setstate 수정 */
    alert(this.state.message + ':' + this.state.username);
    this.setState({ message: '', username: '' });
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
          /* 4. name, value 변경 */
        ></input>
        <input /* 1. input 복사 */
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
