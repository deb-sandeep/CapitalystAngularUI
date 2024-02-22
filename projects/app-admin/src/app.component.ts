import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconBarMeta } from "lib-ui";
import { AppIconBarComponent } from "lib-ui";
import { AppNavBarComponent } from "lib-ui";
import { JobRunFeatureComponent } from "./job-run-feature/job-run-feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppIconBarComponent,
    AppNavBarComponent,
    JobRunFeatureComponent,
  ],
  template: `
    <app-nav-bar [title]="navBarTitle"></app-nav-bar>
    <div class="base-split-pane">
      <app-icon-bar [meta]="iconMetaList"></app-icon-bar>
      <div class="base-module-panel">
        <router-outlet></router-outlet>
      </div>
    </div>`
})
export class AppComponent {

  navBarTitle : string = 'New Admin module' ;

  iconMetaList : IconBarMeta[] = [
    new IconBarMeta( 'clipboard-pulse',  'job-run', true )
  ] ;
}
