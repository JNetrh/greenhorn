import React, { Component } from 'react';

import ErrorMessage from '../molecules/ErrorMessage';

export default class PageNotFound extends Component {
  render() {
    return <ErrorMessage title="Error 404: Page not Found" variant="light" />;
  }
}
