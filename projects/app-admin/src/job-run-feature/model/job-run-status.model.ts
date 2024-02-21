import {JobRunStatus, SearchCriteria} from "./job-run-status.vo" ;
import { JobRunStatusDao } from "./job-run-status.dao";
import { Injectable } from "@angular/core";
import { SpringPageVo } from "lib-ui";

@Injectable()
export class JobRunStatusModel {

  private pagedEntries: SpringPageVo<JobRunStatus> | null = null ;
  private searchCriteria: SearchCriteria = new SearchCriteria() ;

  public constructor( dataSource:JobRunStatusDao ) {

    dataSource.getSearchResults( this.searchCriteria )
              .subscribe( pagedEntries => {
                this.pagedEntries = pagedEntries ;
              } ) ;
   }

  public getEntries() : JobRunStatus[] {
    return this.pagedEntries != null ? this.pagedEntries.content : [] ;
  }

  public getSearchCriteria() : SearchCriteria {
    return this.searchCriteria ;
  }
}
