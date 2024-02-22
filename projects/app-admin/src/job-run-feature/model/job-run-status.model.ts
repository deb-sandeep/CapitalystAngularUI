import {JobRunStatus, SearchCriteria} from "./job-run-status.vo" ;
import { JobRunStatusDao } from "./job-run-status.dao";
import { Injectable } from "@angular/core";
import { Pageable, SpringPageVo } from "lib-ui";

@Injectable()
export class JobRunStatusModel {

  private pagedEntries: SpringPageVo<JobRunStatus> | null = null ;
  private searchCriteria: SearchCriteria = new SearchCriteria() ;

  constructor( private dataSource:JobRunStatusDao ) {
    this.fetchSearchResultsFromServer() ;
  }

  fetchSearchResultsFromServer() : void {
    this.dataSource.getSearchResults( this.searchCriteria )
      .subscribe( pagedEntries => {
        this.pagedEntries = pagedEntries ;
      } ) ;
  }

  getEntries() : JobRunStatus[] {
    return this.pagedEntries != null ? this.pagedEntries.content : [] ;
  }

  getPageInfo() : Pageable | null {
    return this.pagedEntries != null ? this.pagedEntries.pageable : null ;
  }

  getSearchCriteria() : SearchCriteria {
    return this.searchCriteria ;
  }

  isFirstPage() : boolean {
    return this.pagedEntries != null ? this.pagedEntries.first : true ;
  }

  isLastPage() : boolean {
    return this.pagedEntries != null ? this.pagedEntries.last : true ;
  }

  getTotalPages() : number {
    return this.pagedEntries != null ? this.pagedEntries.totalPages : 0 ;
  }

  getTotalRecords() : number {
    return this.pagedEntries != null ? this.pagedEntries.totalElements : 0 ;
  }
}
