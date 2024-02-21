import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";

import { AppComponent } from "../app/app.component";
import { ModelModule } from "./model/model.module";
import { JobRunStatusModel } from "./model/job-run-status.model";
import { PipesModule } from "./pipes/pipes.module";
import { ComponentsModule } from "./components/components.module";

@Component({
  selector: 'job-run-feature',
  standalone: true,
  imports: [
    ModelModule,
    PipesModule,
    ComponentsModule,
    NgForOf, DatePipe, NgIf],
  templateUrl: './job-run-feature.component.html'
})
export class JobRunFeatureComponent {

  constructor( private parent : AppComponent,
               public model : JobRunStatusModel ) {
    parent.navBarTitle = 'Job Run status management' ;
  }
}
