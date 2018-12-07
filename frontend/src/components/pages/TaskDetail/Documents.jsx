import React from 'react';
import { Field } from 'redux-form';
import { FileUploadWithDropzone } from '../../organisms/FileUpload';
import { DocumentsList } from '../../organisms/DocumentsList';

export const TaskDocuments = ({ newDocuments, oldDocuments }) => (
  <div>
    <h3>Documents</h3>
    <DocumentsList items={oldDocuments} />
    <Field
      name="documents"
      files={newDocuments}
      component={FileUploadWithDropzone}
    />
  </div>
);
