import {NgModule} from "@angular/core";
import {StatusTableComponent} from "./status-table/status-table.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";

@NgModule({
  imports:[StatusTableComponent,ToolBarComponent],
  exports:[StatusTableComponent,ToolBarComponent]
})
export class ComponentsModule {}
