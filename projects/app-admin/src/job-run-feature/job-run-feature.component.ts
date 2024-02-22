import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";

import { ModelModule } from "./model/model.module";
import { JobRunStatusModel } from "./model/job-run-status.model";
import { PipesModule } from "./pipes/pipes.module";
import { ComponentsModule } from "./components/components.module";
import {AppComponent} from "../app.component";

@Component({
  selector: 'job-run-feature',
  standalone: true,
  imports: [
    ModelModule,
    PipesModule,
    ComponentsModule,
    NgForOf, DatePipe, NgIf],
  template: `
    <status-table></status-table>
    <tool-bar></tool-bar>
  `
})
export class JobRunFeatureComponent {

  constructor( private _app : AppComponent,
               public model : JobRunStatusModel ) {

    _app.navBarTitle = 'Job Run Status Management' ;
  }
}
