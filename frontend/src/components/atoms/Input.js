import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  onChange = event => {
    const { id, onChange } = this.props;
    const { value } = event.target;

    if (!onChange) {
      return;
    }

    onChange(id, value);
  };

  render() {
    const { id, type, placeholder, value, ...rest } = this.props;

    return (
      <input
        type={type || 'text'}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value || ''}
        {...rest}
        onChange={this.onChange}
      />
    );
  }
}
