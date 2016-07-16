import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SlideActions } from '../../actions';
import { Wrapper, Single } from '../../components/Slides';
import SlideData from '../../../data/slides.json';

class Slides extends Component {

  constructor(props){
    super(props);

    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePrevSlide = this.handlePrevSlide.bind(this);
  }

  handleNextSlide() {
    this.props.dispatch(SlideActions.incrementSlide());
  }

  handlePrevSlide() {
    this.props.dispatch(SlideActions.decrementSlide());
  }

  render() {

    const { slide } = this.props;

    return (
      <Wrapper onNext={ this.handleNextSlide } onPrev={ this.handlePrevSlide }>
        <Single {...SlideData[slide - 1]} />
      </Wrapper>
    );
  }
}

let mapStateToProps = (state) => { return { slide: state.slide }};

export default connect(mapStateToProps)(Slides);
