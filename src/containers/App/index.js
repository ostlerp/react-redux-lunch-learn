import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppWrapper from '../../components/App/Wrapper';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppWrapper>
        { this.props.children }
      </AppWrapper>
    );
  }
}

export default connect()(App);
