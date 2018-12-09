import { Document } from '../../models';
export const saveDocumentInfo = (files, ids) => {
  const documents = files.map(({ originalname, mimetype, location, size }) => ({
    name: originalname,
    type: mimetype,
    path: location,
    size,
    ...ids,
  }));
  return Document.bulkCreate(documents);
};
