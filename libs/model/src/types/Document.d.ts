import { DocumentChildren } from './DocumentChildren';

export type Document = {
  type: string;
  children: Array<DocumentChildren>;
};
