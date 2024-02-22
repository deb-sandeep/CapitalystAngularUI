import { Component } from '@angular/core';
import {DatePipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'search-bar',
  standalone: true,
    imports: [
        DatePipe,
        NgForOf,
        NgIf,
        PipesModule,
        ReactiveFormsModule,
        SlicePipe
    ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
