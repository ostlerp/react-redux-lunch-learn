import React, { Component } from 'react';
import { Link } from 'react-router';

class AppWrapper extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        { this.props.children }
        <div className="bottom-right">
          <Link to="/">Actions</Link> | <Link to="/slides">Slides</Link>
        </div>
      </div>
    );
  }
}

export default AppWrapper;
