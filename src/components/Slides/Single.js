import React, { Component } from 'react';
import { connect } from 'react-redux';

class Single extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { title, info, image } = this.props;

    let content;
    let key = 0;
    if(info && Array.isArray(info)){
      content = info.map(item =>
        <li key={key++}>{ item }</li>
      );
    }

    return (
      <div className="slide-content">
        <h2>{ title }</h2>
        <ul>
          { content }
        </ul>
        { image &&
          <div className="image-wrapper">
            <img src={`/src/assets/images/${image}`} />
          </div>
        }
      </div>
    );
  }
}

export default Single;
