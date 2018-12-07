import React from 'react';
import DropZone from 'react-dropzone';
import { Icon, List, Card } from 'antd';
import { substring } from '../../../helpers/substring';

const FileItem = ({ name, size }) => {
  const shortName = substring(name, 20, false),
    fileSize = Math.round((size / 1024) * 100) / 100;
  return (
    <div style={{ padding: '1em' }}>
      <Icon type="file" style={{ paddingRight: '2em' }} />
      {shortName} - {fileSize} KB
    </div>
  );
};

const getFilesData = files => files && Array.from(files);

export const FileUploadWithDropzone = ({
  handleOnDrop,
  input,
  files,
  meta: { error, touched },
}) => (
  <div>
    <DropZone
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={input.onChange}
    >
      <Card
        style={{
          width: '100%',
          cursor: 'pointer',
          textAlign: 'center',
          paddingTop: '2em',
        }}
      >
        <p className="ant-upload-drag-icon">
          <Icon
            type="inbox"
            style={{ fontSize: '3em', color: '#488869' }}
            theme="outlined"
          />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload files
        </p>
        {/* <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p> */}
      </Card>
    </DropZone>
    {files &&
      files.length > 0 && (
        <List
          bordered
          dataSource={getFilesData(files)}
          style={{ backgroundColor: 'white', style: 'margin: 10px 0' }}
          renderItem={FileItem}
        />
      )}
    {touched && error && <div style={{ color: 'red' }}>{error}</div>}
  </div>
);
