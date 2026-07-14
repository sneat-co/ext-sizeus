import { ISpaceItemNavContext } from '@sneat/space-models';
import { IListBrief, IListDbo, ListType } from '../dto/index.js';

export interface IListKey {
  id: string;
  type: ListType;
}

export interface IListContext extends ISpaceItemNavContext<
  IListBrief,
  IListDbo
> {
  type: ListType;
}
