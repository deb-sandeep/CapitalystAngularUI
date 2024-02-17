import {Routes} from '@angular/router';
import {JobRunFeatureComponent} from "../job-run-feature/job-run-feature.component";

export const routes: Routes = [
  { path: "job-run", component : JobRunFeatureComponent },
  { path: "",        component : JobRunFeatureComponent }
];
