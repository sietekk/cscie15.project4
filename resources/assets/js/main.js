'use strict';

import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.text}
      </div>
    );
  }

}

Main.defaultProps = {text: 'HELLO WORLD!',};

