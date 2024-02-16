import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './app-nav-bar.component.html',
  styleUrl: './app-nav-bar.component.css'
})
export class AppNavBarComponent {

  @Input( "title" )
  title:string = "New Admin module" ;
}
