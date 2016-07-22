import React, { Component, PropTypes } from 'react';

class SlideWrapper extends Component {

  constructor(props){
    super(props);

    this.checkKey = this.checkKey.bind(this);
  }

  checkKey(event) {
    event = event || window.event;

    if(event.keyCode === 37){
      this.props.onPrev();
    }
    if(event.keyCode === 39){
      this.props.onNext();
    }
  }

  componentDidMount() {
    document.onkeydown = this.checkKey;
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }

  render() {
    return (
      <div className="slide-wrapper">
        { this.props.children }
      </div>
    );
  }
}

SlideWrapper.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func
}

export default SlideWrapper;
