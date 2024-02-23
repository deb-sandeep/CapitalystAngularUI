import {JobRunStatus, SearchCriteria} from "./job-run-status.vo" ;
import { JobRunStatusDao } from "./job-run-status.dao";
import { Injectable } from "@angular/core";
import { Pageable, SpringPageVo } from "lib-ui";

@Injectable()
export class JobRunStatusModel {

  private pagedEntries: SpringPageVo<JobRunStatus> | null = null ;
  private searchCriteria: SearchCriteria = new SearchCriteria() ;
  private jobNames: string[] = [] ;

  constructor( private dataSource:JobRunStatusDao ) {
    this.fetchSearchResultsFromServer() ;
    this.fetchDistinctJobNamesFromServer() ;
  }

  fetchSearchResultsFromServer() : void {
    this.dataSource.getSearchResults( this.searchCriteria )
      .subscribe( pagedEntries => {
        this.pagedEntries = pagedEntries ;
      } ) ;
  }

  fetchDistinctJobNamesFromServer() : void {
    this.dataSource.getDistinctJobNames()
      .subscribe( distinctJobNames => {
        this.jobNames = distinctJobNames ;
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

  getDistinctJobNames() : string[] {
    return this.jobNames ;
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

  getPctEntriesSelected() : number {
    const entries:JobRunStatus[] = this.getEntries() ;
    const totalEntries:number = entries.length ;
    let numEntriesSelected:number = 0 ;

    for( const entry of entries ) {
      if( entry.selected ) {
        numEntriesSelected += 1 ;
      }
    }
    return numEntriesSelected/totalEntries ;
  }

  deleteEntries(idList: number[]) {
    this.dataSource.deleteEntries(idList)
                   .subscribe(()=> {
                       this.fetchSearchResultsFromServer() ;
                   }) ;
  }

  deleteSelectedEntries() {
    let selectedIds:number[] = [] ;
    for( const entry of this.getEntries() ) {
      if( entry.selected ) {
        selectedIds.push( entry.id ) ;
      }
    }

    if( selectedIds.length > 0 ) {
      this.deleteEntries( selectedIds ) ;
    }
  }
}
