import React, { Component } from 'react';
import { DropZoneField } from './DropZoneField';

export class FileUpload extends Component {
  state = { imageFile: [] };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => {
    this.setState({ imageFile: [] });
  };

  render() {
    return (
      <DropZoneField
        type="file"
        imagefile={this.state.imageFile}
        handleOnDrop={this.handleOnDrop}
        {...this.props}
      />
    );
  }
}
