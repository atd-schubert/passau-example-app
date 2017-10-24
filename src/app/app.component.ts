import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editable: boolean = false;
  public name: string = 'Passau';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
}
