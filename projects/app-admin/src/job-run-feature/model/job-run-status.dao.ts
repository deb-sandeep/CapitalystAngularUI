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

      if( propValue != null && propValue != "" ) {
        if( propValue instanceof Date ) {
          propValue = (propValue as Date).toISOString().split('T')[0] ;
        }

        params = params.append( property, propValue.toString() ) ;
      }
    }

    return this.http.get<SpringPageVo<JobRunStatus>>( `${environment.apiRoot}/Job/SearchRunStatusEntries`, {
      observe: 'body',
      responseType: 'json',
      params: params
    }) ;
  }

  public getDistinctJobNames(): Observable<string[]> {

    return this.http.get<string[]>( `${environment.apiRoot}/Job/JobNames`, {
      observe: 'body',
      responseType: 'json'
    }) ;
  }
}
