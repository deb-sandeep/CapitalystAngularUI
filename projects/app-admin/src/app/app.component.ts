import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconBarMeta } from "lib-ui";
import { AppIconBarComponent } from "lib-ui";
import { AppNavBarComponent } from "lib-ui";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppIconBarComponent,
    AppNavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  navBarTitle : string = 'Test title' ;
  iconMetaList : IconBarMeta[] = [
    new IconBarMeta( 'clipboard-pulse', '/home' ),
  ] ;
}
