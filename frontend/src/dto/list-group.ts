import { IListInfo, ListType } from './list.js';

export interface IListGroup {
  id: string;
  title?: string;
  type?: ListType;
  emoji?: string;
  lists?: IListInfo[];
}
