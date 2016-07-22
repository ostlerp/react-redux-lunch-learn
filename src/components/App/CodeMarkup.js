import React, { Component, PropTypes } from 'react';

class CodeMarkup extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <pre className="language-javascript">
        <code className="language-javascript">
          { this.props.content }
        </code>
      </pre>
    );
  }
}

CodeMarkup.propTypes = {
  content: PropTypes.string
}

export default CodeMarkup;
