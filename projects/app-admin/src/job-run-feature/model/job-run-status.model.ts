import { JobRunStatus } from "./job-run-status.vo" ;
import { JobRunStatusDao } from "./job-run-status.dao";
import { Injectable } from "@angular/core";

@Injectable()
export class JobRunStatusModel {

  private entries:JobRunStatus[] ;

  public constructor( dataSource:JobRunStatusDao ) {
    this.entries = new Array<JobRunStatus>() ;
    dataSource.getSearchResults({})
              .subscribe( entries => this.entries = entries ) ;
   }

  public getEntries() : JobRunStatus[] {
    return this.entries ;
  }
}
