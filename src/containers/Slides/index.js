import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SlideActions } from '../../actions';
import { Wrapper, Intro } from '../../components/Slides';

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

    let currentSlide = <Intro />;

    return (
      <Wrapper onNext={ this.handleNextSlide } onPrev={ this.handlePrevSlide }>
        { currentSlide }
      </Wrapper>
    );
  }
}

let mapStateToProps = (state) => { return { slide: state.slide }};

export default connect(mapStateToProps)(Slides);
