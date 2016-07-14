import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="slide-content">
        <h2>Redux</h2>
        <p>Redux is a predictable state container for JavaScript apps.</p>
      </div>
    );
  }
}

export default Intro;
