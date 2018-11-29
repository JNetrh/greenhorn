import React from 'react';
import DropZone from 'react-dropzone';
import { Icon, List, Card } from 'antd';
import { substring } from '../../../helpers/substring';

export const DropZoneField = ({
  handleOnDrop,
  input,
  imagefile,
  label,
  meta: { error, touched },
}) => (
  <div>
    <DropZone
      // accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={input.onChange}
      // style={{ height: 300 }}
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
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Card>
    </DropZone>
    {imagefile && imagefile.length > 0 && (
      <List
        header={<div>Files to submit</div>}
        bordered
        dataSource={imagefile}
        renderItem={({ name, size }) => (
          <div style={{ padding: '1em' }}>
            <Icon type="file" style={{ paddingRight: '2em' }} />
            {substring(name, 20, false)} - {size / 1024} KB
          </div>
        )}
      />
    )}

    {touched && error && <div style={{ color: 'red' }}>{error}</div>}
  </div>
);
