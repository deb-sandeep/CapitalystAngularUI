import { Component } from '@angular/core';
import {AppComponent} from "../app/app.component";

@Component({
  selector: 'app-test-feature',
  standalone: true,
  imports: [],
  templateUrl: './test-feature.component.html',
  styleUrl: './test-feature.component.css'
})
export class TestFeatureComponent {

  constructor( private _parent : AppComponent ) {
    _parent.navBarTitle = 'Test feature' ;
  }
}
