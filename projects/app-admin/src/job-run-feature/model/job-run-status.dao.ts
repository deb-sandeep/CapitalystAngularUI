import { Injectable } from "@angular/core" ;
import { HttpClient, HttpParams } from "@angular/common/http";
import { JobRunStatus, SearchCriteria } from "./job-run-status.vo";
import { Observable } from "rxjs";
import { Pageable, SortInfo, SpringPageVo } from "lib-ui";
import { environment } from "../../environments/environment";

@Injectable()
export class JobRunStatusDao {

  constructor( private http:HttpClient ) {}

  public getSearchResults( searchCriteria:SearchCriteria ): Observable<SpringPageVo<JobRunStatus>> {

    let params = new HttpParams() ;
    type SearchCriteriaKey = keyof SearchCriteria ;

    for( const property in searchCriteria ) {
      const propKey: SearchCriteriaKey = property as keyof SearchCriteria ;
      let propValue = searchCriteria[propKey] ;

      if( propValue != null ) {
        if( propValue instanceof Date ) {
          propValue = (propValue as Date).toISOString().split('T')[0] ;
        }
        params = params.append( property, propValue.toString() ) ;
      }
    }

    return this.http.get<SpringPageVo<JobRunStatus>>( `${environment.apiRoot}/Job/SearchRunStatusEntries`, {
      observe : 'body',
      responseType : 'json',
      params: params
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
