import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
class PageOne extends Component {
  render() {
    return <div>
      <Helmet>
          <title>One</title>
        </Helmet>
        <h1>One</h1>
    </div>;
  }
}

export default PageOne;
