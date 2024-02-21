import {NgModule} from "@angular/core";

export interface SortInfo {
  empty:boolean,
  sorted:boolean,
  unsorted:boolean
}

export interface Pageable {
  pageNumber: number,
  pageSize:number,
  sort: SortInfo,
  offset: number,
  paged: boolean,
  unpaged: boolean
}

export interface SpringPageVo<T> {
  content:T[],
  pageable:Pageable,
  last: boolean,
  totalPages: number,
  totalElements: number,
  first: boolean,
  size: number,
  number: number,
  sort: SortInfo,
  numberOfElements: number,
  empty: boolean
}
