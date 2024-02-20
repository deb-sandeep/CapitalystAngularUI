import {NgModule} from "@angular/core";
import {FirstLinePipe} from "./first-line.pipe";

@NgModule({
  declarations:[FirstLinePipe],
  exports:[FirstLinePipe]
})
export class PipesModule {}
