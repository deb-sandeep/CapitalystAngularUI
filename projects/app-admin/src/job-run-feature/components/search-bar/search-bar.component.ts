import { Component } from '@angular/core';
import {DatePipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JobRunStatusModel} from "../../model/job-run-status.model";
import "jquery" ;
import {from} from "rxjs";
import {SearchCriteria} from "../../model/job-run-status.vo";

declare var $:any ;

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    PipesModule,
    ReactiveFormsModule,
    SlicePipe,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  multiSelect:boolean = false ;

  constructor( public model : JobRunStatusModel ) {}

  ngAfterViewInit() {
    $(".datepicker").datepicker({
      format: 'dd/mm/yy',
      autoclose: true,
      calendarWeeks: true,
      todayHighlight: true
    });
  }

  clearSearchCriteria() : void {
    let sc: SearchCriteria = this.model.getSearchCriteria() ;
    sc.reset() ;
    this.search() ;
  }

  search() : void {
    let sc: SearchCriteria = this.model.getSearchCriteria() ;

    sc.fromDate = $('#fromDate').datepicker( 'getDate' ) ;
    sc.toDate   = $('#toDate').datepicker( 'getDate' ) ;
    sc.pageNum  = 0 ;

    this.model.fetchSearchResultsFromServer() ;
  }
}
