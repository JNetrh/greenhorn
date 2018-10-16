import React, { Component } from 'react';

import { HomeTemplate } from '../templates/HomeTemplate';

export class HomePage extends Component {
  render() {
    return (
      <HomeTemplate
        title="Welcome to e-shop"
        paragraph="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
      />
    );
  }
}
