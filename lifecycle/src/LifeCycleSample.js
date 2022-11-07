import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  /* getDerivedStateFromProps */

  //after 16.3
  // data from props syncs in state
  // when component mounts, updates, get data
  static getDeriveStateFromProps(nextProps, prevState) {
    console.log('getDeriveStateFromProps..');
    // console.log(nextProps);
    // console.log(prevState);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null; /* don't have to change state, returns null */
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  // if return value true = rerendering, false = don't rerendering
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate..');
    // console.log(nextProps);
    // console.log(nextState);

    /* if. lastnumber 4 - don't rerendering */
    return nextState.number % 10 == 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount...');
  }

  // callup just before updates 'result value of render'  browser
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate..');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
    /* if, null - doesn't activate function under */
  }

  // activates after rerendering is done
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidupdate..');
    if (snapshot) {
      console.log('업데이트 되기 전 색상 : ', snapshot);
    }
  }

  render() {
    console.log('render'); /* to check when 'render' starts? */
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p> color : {this.state.color} </p>
        <button> 더하기 </button>
      </div>
    );
  }
}

export default LifeCycleSample;
