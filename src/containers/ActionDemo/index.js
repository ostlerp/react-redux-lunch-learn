import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Wrapper } from '../../components/ActionCreators';

class ActionDemo extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Item>Fetch Users</Item>
        <Item>Fetch Company</Item>
        <Item>Fetch Orders</Item>
        <Item>Fetch Report</Item>
        <Item>Fetch Users</Item>
      </Wrapper>
    );
  }
}

export default connect()(ActionDemo);
