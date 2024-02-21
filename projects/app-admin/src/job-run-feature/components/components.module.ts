import {NgModule} from "@angular/core";
import {StatusTableComponent} from "./status-table/status-table.component";

@NgModule({
  imports:[StatusTableComponent],
  exports:[StatusTableComponent]
})
export class ComponentsModule {}
