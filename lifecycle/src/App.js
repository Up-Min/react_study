/* make class-like 
App.js also component, hav life-length*/

import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  /* make color code randomly */
}

class App extends Component {
  state = {
    color: '#000000', //black
  };

  handleClick = () => {
    /* state change */
    this.setState({ color: getRandomColor() });
    /* make new function getRandomColor -- line 6 --  */
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick()}> 랜덤색상 </button>
        {/* clickbutton - activate handleClick */}
        <LifeCycleSample color={this.state.color} />
        {/* graps LifecycleSaple.js - needs props (line 20 in LifecycleSaple.js)
      'color' matches color line 14 */}
      </div>
    );
  }
}

export default App;
