import React from 'react';

import api from '../../api';

export class ContactDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null,
    };
  }

  componentDidMount() {
    const { contactId } = this.props.match.params;
    api(`https://jsonplaceholder.typicode.com/users/${contactId}`).then(res => {
      const contact = res.data;
      this.setState({ contact });
    });
  }

  render() {
    const { contact } = this.state;

    if (!contact) {
      return 'Loading...';
    }

    const { name, email } = contact;

    return (
      <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
      </div>
    );
  }
}
