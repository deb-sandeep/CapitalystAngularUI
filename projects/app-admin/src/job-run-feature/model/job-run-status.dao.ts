import { Injectable } from "@angular/core" ;
import { HttpClient } from "@angular/common/http";
import { JobRunStatus, SearchCriteria } from "./job-run-status.vo";
import { Observable } from "rxjs";
import { Pageable, SortInfo, SpringPageVo } from "lib-ui";

@Injectable()
export class JobRunStatusDao {

  constructor( private http:HttpClient ) {}

  public getSearchResults( searchCriteria:SearchCriteria ): Observable<SpringPageVo<JobRunStatus>> {
    return this.http.get<SpringPageVo<JobRunStatus>>( "http://localhost:8080/Job/SearchRunStatusEntries", {
      observe : 'body',
      responseType : 'json'
    }) ;
  }

  public getSearchResultsDummy( searchCriteria:SearchCriteria ): Observable<SpringPageVo<JobRunStatus>> {

    let content:JobRunStatus[] = [
      {
        "id": 14786,
        "date": new Date( 2023, 1, 21, 1 ),
        "duration": 0,
        "result": "SUCCESS",
        "remarks": null,
        "jobName": "NSEIndexEODImportJob",
        "selected" : false
      },
      {
        "id": 14787,
        "date": new Date( 2023, 1, 21, 2 ),
        "duration": 0,
        "result": "FAILURE",
        "remarks": "java.lang.Exception\njava.io.Exception\njava.nio.Exception",
        "jobName": "NSEIndexEODImportJob",
        "selected" : false
      }
    ] ;

    return new Observable( (subscriber) => {
      subscriber.next({
        empty: false,
        first: false,
        last: false,
        number: 0,
        numberOfElements: 0,
        size: 0,
        sort: {
          sorted:true,
          unsorted:false,
          empty:false
        },
        totalElements: 0,
        totalPages: 0,
        content:content,
        pageable:{
          pageNumber: 0,
          pageSize: 50,
          sort: {
            empty: false,
            sorted: true,
            unsorted: false
          },
          offset: 0,
          paged: true,
          unpaged: false
        }
      });
      subscriber.complete() ;
    }) ;
  }
}
