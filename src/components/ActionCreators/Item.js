import React, { Component, PropTypes } from 'react';

class ActionCreatorItem extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="action-demo-item">
        <button onClick={this.props.onClick} type="button">{ this.props.children }</button>
      </div>
    );
  }
}

ActionCreatorItem.propTypes = {
  onClick: PropTypes.func
}

export default ActionCreatorItem;
