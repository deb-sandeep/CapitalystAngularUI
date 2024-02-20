import {NgModule} from "@angular/core";
import {JobRunStatusModel} from "./job-run-status.model";
import {JobRunStatusDao} from "./job-run-status.dao";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports:[HttpClientModule],
  providers: [JobRunStatusModel, JobRunStatusDao]
})
export class ModelModule {}
