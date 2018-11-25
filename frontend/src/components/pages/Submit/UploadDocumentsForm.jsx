import React, { Component } from 'react';
import { Button } from 'antd';
import FileReaderInput from 'react-file-reader-input';

export class UploadDocumentsForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, results) => {
    const { setDocument } = this.props;
    results.forEach(result => {
      const [e, file] = result;
      setDocument({ file, upload: e.target.result });
    });
  };

  render() {
    const { documents } = this.props;
    return (
      <div>
        {documents.map((doc, index) => (
          <p key={index}>{doc.file.name}</p>
        ))}
        <label htmlFor="my-file-input">Upload a File:</label>
        <FileReaderInput
          multiple
          as="buffer"
          id="my-file-input"
          onChange={this.handleChange}
        >
          <Button type="default">Select</Button>
        </FileReaderInput>
      </div>
    );
  }
}

export default UploadDocumentsForm;
