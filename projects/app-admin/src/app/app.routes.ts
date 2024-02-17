import {Routes} from '@angular/router';
import {JobRunFeatureComponent} from "../job-run-feature/job-run-feature.component";
import {TestFeatureComponent} from "../test-feature/test-feature.component";

export const routes: Routes = [
  { path: "job-run", component : JobRunFeatureComponent },
  { path: "test",    component : TestFeatureComponent },
  { path: "",        component : JobRunFeatureComponent }
];
