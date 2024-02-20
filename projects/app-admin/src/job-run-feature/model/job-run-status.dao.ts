import { Injectable } from "@angular/core" ;
import { HttpClient } from "@angular/common/http";
import { JobRunStatus, SearchCriteria } from "./job-run-status.vo";
import { Observable, from } from "rxjs";

@Injectable()
export class JobRunStatusDao {

  constructor( private httpClient:HttpClient ) {}

  public getSearchResults( searchCriteria:SearchCriteria ): Observable<JobRunStatus[]> {
    return new Observable( (subscriber) => {
      subscriber.next([
        {
          "id": 14786,
          "date": new Date( 2023, 1, 21, 1 ),
          "duration": 0,
          "result": "SUCCESS",
          "remarks": null,
          "jobName": "NSEIndexEODImportJob"
        },
        {
          "id": 14787,
          "date": new Date( 2023, 1, 21, 2 ),
          "duration": 0,
          "result": "FAILURE",
          "remarks": "java.lang.Exception\njava.io.Exception\njava.nio.Exception",
          "jobName": "NSEIndexEODImportJob"
        }
      ]);
      subscriber.complete() ;
    }) ;
  }
}
