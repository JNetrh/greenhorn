import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../atoms/Button';

export class ContactListItem extends React.Component {
  render() {
    const { isOpen, onOpen } = this.props;
    const { name, email, phone, id } = this.props.person;

    return (
      <div className="py-2 border-bottom">
        <Link to={`/contact/${id}`}>{name}</Link>
        <p>{email}</p>
        <p>
          <Button
            title={`${isOpen ? 'Close' : 'Open'}`}
            size="sm"
            variant={isOpen ? 'warning' : 'secondary'}
            onClick={() => onOpen(id)}
          />
        </p>
        {isOpen && (
          <div>
            <div>Phone: {phone}</div>
            <div>More info here...</div>
          </div>
        )}
      </div>
    );
  }
}
