import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppWrapper extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        { this.props.children }
      </div>
    );
  }
}

export default AppWrapper;
