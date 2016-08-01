import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { Item, Wrapper } from '../../components/ActionCreators';
import CodeMarkup from '../../components/App/CodeMarkup';

class ActionDemo extends Component {

  constructor(props){
    super(props);

    this.handleFetchUser = this.handleFetchUser.bind(this);
    this.handleClearUser = this.handleClearUser.bind(this);
    this.handleFetchCompany = this.handleFetchCompany.bind(this);
    this.handleFetchOrders = this.handleFetchOrders.bind(this);
    this.handleFetchReport = this.handleFetchReport.bind(this);
    this.handleFetchSettings = this.handleFetchSettings.bind(this);
    this.handleFetchPosts = this.handleFetchPosts.bind(this);
  }

  handleFetchUser() {
    this.props.dispatch(Actions.UserActions.fetchUser());
  }

  handleClearUser() {
    this.props.dispatch(Actions.UserActions.clearUser());
  }

  handleFetchCompany() {
    this.props.dispatch(Actions.CompanyActions.fetchCompany(5));
  }

  handleFetchOrders() {

  }

  handleFetchReport() {
    this.props.dispatch(Actions.ReportActions.fetchReport());
  }

  handleFetchSettings() {

  }

  handleFetchPosts() {

  }

  render() {

    const { user, company, order, report, settings, posts } = this.props;

    let state = { user, company, order, report, settings, posts };

    return (
      <div>
        <Wrapper title="Action Creators">
          <Item onClick={this.handleFetchUser}>Get User</Item>
          <Item onClick={this.handleClearUser}>Clear User</Item>
          <Item onClick={this.handleFetchCompany}>Get Company</Item>
          <Item onClick={this.handleFetchOrders}>Get Orders</Item>
          <Item onClick={this.handleFetchReport}>Get Report</Item>
          <Item onClick={this.handleFetchSettings}>Get Settings</Item>
          <Item onClick={this.handleFetchPosts}>Get Posts</Item>
        </Wrapper>
        <Wrapper title="State">
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
