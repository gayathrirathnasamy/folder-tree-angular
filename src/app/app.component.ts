import { Component } from '@angular/core';
import { SampleData } from './sample-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  sampleData = new SampleData().data;
}
