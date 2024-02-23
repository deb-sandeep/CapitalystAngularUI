import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {JobRunStatusModel} from "../../model/job-run-status.model";
import {ModelModule} from "../../model/model.module";
import {JobRunStatus} from "../../model/job-run-status.vo";
import {FormsModule} from "@angular/forms";
import {ConfirmationDialogService} from "lib-ui";

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

  stackTrace:string | null = null ;

  constructor( public model: JobRunStatusModel,
               private dlgSvc: ConfirmationDialogService ) {}

  deleteEntry( entry: JobRunStatus ) : void {
    this.model.deleteEntries( [entry.id] ) ;
  }

  bulkSelectionChanged( newState:boolean ) : void {
    this.model.getEntries()
              .forEach( entry => entry.selected = newState ) ;
  }
}
