import { Component } from '@angular/core';
import { JobRunStatusModel } from "../../model/job-run-status.model";
import { NgIf } from "@angular/common";
import { Pageable, ConfirmationDialogService } from "lib-ui";
import { SearchCriteria } from "../../model/job-run-status.vo";


@Component({
  selector: 'tool-bar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  constructor( public model: JobRunStatusModel,
               private dlgSvc: ConfirmationDialogService ) {}

  prevPageNumber() : number {
    let retVal:number = -1 ;
    let pageInfo:Pageable | null = this.model.getPageInfo() ;
    if( pageInfo != null ) {
      retVal = pageInfo!.pageNumber - 1 ;
    }
    return retVal ;
  }

  nextPageNumber() : number {
    let retVal:number = -1 ;
    let pageInfo:Pageable | null = this.model.getPageInfo() ;
    if( pageInfo != null ) {
      retVal = pageInfo!.pageNumber + 1 ;
    }
    return retVal ;
  }

  prevPageExists() : boolean {
    return !this.model.isFirstPage()
  }

  nextPageExists() : boolean {
    return !this.model.isLastPage() ;
  }

  fetchNextPage( prev:boolean ) : void {

    console.log( `Fetching next page. prev=${prev}` ) ;

    let searchCrit: SearchCriteria = this.model.getSearchCriteria() ;
    let nextPageNum = prev ? this.prevPageNumber() :
                                      this.nextPageNumber() ;

    if( nextPageNum != -1 ) {
      searchCrit.pageNum = nextPageNum ;
      this.model.fetchSearchResultsFromServer() ;
    }
  }

  deleteSelectedEntries() : void {
    this.model.deleteSelectedEntries() ;
  }

  deleteAllSearchResults() {
    console.log( "Delete all search results." ) ;
    let msg:string = `Delete all (${this.model.getTotalRecords()}) searched entries` ;
    this.dlgSvc.confirm( msg )
      .then( () => {
        console.log( "User confirmed deletion. " ) ;
      })
      .catch( reason => console.log( "User declined confirmation." ) ) ;
  }
}
