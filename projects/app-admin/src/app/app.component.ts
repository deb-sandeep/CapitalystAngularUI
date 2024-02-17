import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconBarMeta } from "lib-ui";
import { AppIconBarComponent } from "lib-ui";
import { AppNavBarComponent } from "lib-ui";
import { JobRunFeatureComponent } from "../job-run-feature/job-run-feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppIconBarComponent,
    AppNavBarComponent,
    JobRunFeatureComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  navBarTitle : string = 'Capitalyst new admin module' ;
  iconMetaList : IconBarMeta[] = [
    new IconBarMeta( 'clipboard-pulse',  'job-run', true )
  ] ;
}
