export interface ICategory {
  _id: string;
  name: string;
  parent: string;
  properties: [{ type: Object }];
}
