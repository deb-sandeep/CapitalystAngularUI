import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

export class IconBarMeta {
  bsIconName : string ;
  routePath : string ;
  selected : boolean ;

  constructor( iconName:string, routePath:string, selected:boolean = false ) {
    this.bsIconName = iconName ;
    this.routePath = routePath ;
    this.selected = selected ;
  }
}

@Component({
  selector: 'app-icon-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-icon-bar.component.html',
  styleUrl: './app-icon-bar.component.css'
})
export class AppIconBarComponent {

  @Input( "meta" )
  public iconMetaList:IconBarMeta[] = [];

  featureIconClicked( meta : IconBarMeta ): void {
    this.iconMetaList.forEach( meta => meta.selected = false )
    meta.selected = true ;
  }
}
