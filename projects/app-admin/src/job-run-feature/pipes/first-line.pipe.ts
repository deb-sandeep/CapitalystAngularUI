import {Pipe} from "@angular/core";

@Pipe({
  name:"firstLine"
})
export class FirstLinePipe {

  transform( value:any ):string {
    if( value ) {
      let lines:string[] = value.split('\n') ;
      return lines[0] ;
    }
    return "" ;
  }
}
