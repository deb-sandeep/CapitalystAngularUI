import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {JobRunStatusModel} from "../../model/job-run-status.model";
import {ModelModule} from "../../model/model.module";
import {JobRunStatus} from "../../model/job-run-status.vo";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'status-table',
  standalone: true,
  imports: [
    ModelModule,
    PipesModule,
    NgForOf,
    NgIf,
    DatePipe,
    FormsModule,
    SlicePipe
  ],
  templateUrl: './status-table.component.html',
  styleUrl: './status-table.component.css'
})
export class StatusTableComponent {

  constructor( public model : JobRunStatusModel ) {}

  deleteEntry( entry: JobRunStatus ) : void {
    console.log( "Entry to be deleted.", entry ) ;
  }

  bulkSelectionChanged( newState:boolean ) : void {
    this.model.getEntries()
              .forEach( entry => entry.selected = newState ) ;
  }
}
