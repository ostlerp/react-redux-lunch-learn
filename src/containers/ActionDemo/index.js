import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { Item, Wrapper } from '../../components/ActionCreators';
import CodeMarkup from '../../components/App/CodeMarkup';

class ActionDemo extends Component {

  constructor(props){
    super(props);

    this.handleFetchUser = this.handleFetchUser.bind(this);
    this.handleFetchCompany = this.handleFetchCompany.bind(this);
    this.handleFetchOrders = this.handleFetchOrders.bind(this);
    this.handleFetchReport = this.handleFetchReport.bind(this);
    this.handleFetchSettings = this.handleFetchSettings.bind(this);
  }

  handleFetchUser() {
    this.props.dispatch(Actions.UserActions.fetchUser());
  }

  handleFetchCompany() {

  }

  handleFetchOrders() {

  }

  handleFetchReport() {

  }

  handleFetchSettings() {

  }

  render() {

    const { user } = this.props;

    let state = {
      user
    };

    return (
      <div>
        <Wrapper title="Action Creators">
          <Item onClick={this.handleFetchUser}>Fetch Users</Item>
          <Item>Fetch Company</Item>
          <Item>Fetch Orders</Item>
          <Item>Fetch Report</Item>
          <Item>Fetch Settings</Item>
        </Wrapper>
        <Wrapper>
          <CodeMarkup content={JSON.stringify(state, null, '\t')} />
        </Wrapper>
      </div>

    );
  }
}

let mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(ActionDemo);
