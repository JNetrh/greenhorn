import React from 'react';
import { Upload, Icon, message, Button, Form } from 'antd';
import { DocumentsList } from '../../organisms/DocumentsList';
import TextArea from 'antd/lib/input/TextArea';
const Dragger = Upload.Dragger;

const draggerProps = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const UploadDocumentsForm = () => (
  <div>
    <DocumentsList items={[]} />
    <Dragger {...draggerProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Upload your documents here</p>
      <p className="ant-upload-hint">
        Click or drag file to this area to upload
      </p>
    </Dragger>
    <Form.Item label={'Comment:'}>
      <TextArea />
    </Form.Item>
    <Button type="primary">Submit</Button>
  </div>
);
