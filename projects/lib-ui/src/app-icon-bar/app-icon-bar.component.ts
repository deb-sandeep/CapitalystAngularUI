import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

export class IconBarMeta {
  bsIconName : string ;
  routePath : string ;

  /**
   * @param iconName Name of the bootstrap icon. Without the bs- prefix.
   * @param routePath The path of the route.
   */
  constructor( iconName:string, routePath:string ) {
    this.bsIconName = iconName ;
    this.routePath = routePath ;
  }
}

@Component({
  selector: 'app-icon-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-icon-bar.component.html',
  styleUrl: './app-icon-bar.component.css'
})
export class AppIconBarComponent {

  @Input( "meta" )
  iconMetaList:IconBarMeta[] = [];
}
