import React, { Component } from 'react';

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
