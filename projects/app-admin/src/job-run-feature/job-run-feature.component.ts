import { Component } from '@angular/core';
import { AppComponent } from "../app/app.component";

@Component({
  selector: 'job-run-feature',
  standalone: true,
  imports: [],
  templateUrl: './job-run-feature.component.html',
  styleUrl: './job-run-feature.component.css'
})
export class JobRunFeatureComponent {

  constructor( private parent : AppComponent ) {
    parent.navBarTitle = 'Job Run status management' ;
  }
}
