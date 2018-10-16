import React, { Component } from 'react';

import api from '../../api.js';

import { ContactListItem } from '../molecules/ContactListItem';

export class ContactPageRaw extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesContacts: [],
      marketingContacts: [],
      openedContactId: null,
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    api.get('https://jsonplaceholder.typicode.com/users/').then(response => {
      const { data } = response;

      this.setState({
        salesContacts: data.filter(contact => contact.id <= 5),
        marketingContacts: data.filter(contact => contact.id > 5),
      });
    });
  }

  openContact = contactId => {
    const openedContactId =
      this.state.openedContactId === contactId ? null : contactId;

    this.setState({ openedContactId });
  };

  render() {
    const { salesContacts, marketingContacts, openedContactId } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contacts</h2>
          <h3>Sales</h3>
          {salesContacts.map(person => (
            <ContactListItem
              person={person}
              key={person.id}
              isOpen={person.id === openedContactId}
              onOpen={this.openContact}
            />
          ))}
          <hr />
        </div>
        <div>
          <h3>Marketing</h3>
          {marketingContacts.map(person => (
            <ContactListItem
              person={person}
              key={person.id}
              isOpen={person.id === openedContactId}
              onOpen={this.openContact}
            />
          ))}
        </div>
      </div>
    );
  }
}

export const ContactPage = ContactPageRaw;
