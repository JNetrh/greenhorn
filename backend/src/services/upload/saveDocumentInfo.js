import { Document } from '../../models';
export const saveDocumentInfo = (files, ids) => {
  const documents = files.map(({ originalname, mimetype, path, size }) => ({
    name: originalname,
    type: mimetype,
    path,
    size,
    ...ids,
  }));
  return Document.bulkCreate(documents);
};
