import { JobRunStatus } from "./job-run-status.vo" ;
import { JobRunStatusDao } from "./job-run-status.dao";
import { Injectable } from "@angular/core";
import {SpringPageVo} from "lib-ui";

@Injectable()
export class JobRunStatusModel {

  private pagedEntries: SpringPageVo<JobRunStatus> | null = null ;

  public constructor( dataSource:JobRunStatusDao ) {

    dataSource.getSearchResults({})
              .subscribe( pagedEntries => {
                this.pagedEntries = pagedEntries ;
              } ) ;
   }

  public getEntries() : JobRunStatus[] {
    return this.pagedEntries != null ? this.pagedEntries.content : [] ;
  }
}
