import {NgModule} from "@angular/core";
import {StatusTableComponent} from "./status-table/status-table.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";

@NgModule({
  imports:[StatusTableComponent,ToolBarComponent,SearchBarComponent,ConfirmationDialogComponent],
  exports:[StatusTableComponent,ToolBarComponent,SearchBarComponent,ConfirmationDialogComponent]
})
export class ComponentsModule {}
