import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Textarea extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
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
    const { id, placeholder, rows, value, ...rest } = this.props;

    return (
      <textarea
        className="form-control"
        id={id}
        placeholder={placeholder}
        rows={rows || 5}
        value={value || ''}
        {...rest}
        onChange={this.onChange}
      />
    );
  }
}
