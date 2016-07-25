import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActionCreatorWrapper extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.title && <h2 className="title center">{ this.props.title }</h2> }
        <div className="action-demo-container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ActionCreatorWrapper;
