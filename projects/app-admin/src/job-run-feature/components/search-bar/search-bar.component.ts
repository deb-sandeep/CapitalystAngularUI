import { Component } from '@angular/core';
import {DatePipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JobRunStatusModel} from "../../model/job-run-status.model";

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

  constructor( public model : JobRunStatusModel ) {}
}
