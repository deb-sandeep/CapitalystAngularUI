import {NgModule} from "@angular/core";
import {StatusTableComponent} from "./status-table/status-table.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";

@NgModule({
  imports:[StatusTableComponent,ToolBarComponent,SearchBarComponent],
  exports:[StatusTableComponent,ToolBarComponent,SearchBarComponent]
})
export class ComponentsModule {}
