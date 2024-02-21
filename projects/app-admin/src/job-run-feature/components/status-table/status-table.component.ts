import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {JobRunStatusModel} from "../../model/job-run-status.model";
import {ModelModule} from "../../model/model.module";

@Component({
  selector: 'status-table',
  standalone: true,
    imports: [
        ModelModule,
        PipesModule,
        NgForOf,
        NgIf,
        DatePipe
    ],
  templateUrl: './status-table.component.html',
  styleUrl: './status-table.component.css'
})
export class StatusTableComponent {

  constructor( public model : JobRunStatusModel ) {}
}
