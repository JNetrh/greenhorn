import React, { Component } from 'react';
import { Field } from 'redux-form';
import { DropZoneField } from './DropZoneField';
import { Button } from 'antd';

export class UploadField extends Component {
  state = { imageFile: [] };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => {
    this.setState({ imageFile: [] });
  };

  render = () => (
    <Field
      name="documents"
      component={DropZoneField}
      type="file"
      imagefile={this.state.imageFile}
      handleOnDrop={this.handleOnDrop}
      // style={{ height: 300 }}
    />
    // <div style={{ height: 300, width: '100%', margin: '0 auto' }}>

    //   <Button
    //     type="button"
    //     // disabled={this.props.pristine || this.props.submitting}
    //     onClick={this.resetForm}
    //     style={{ float: 'right' }}
    //   >
    //     Clear
    //   </Button>
    // </div>
  );
}
