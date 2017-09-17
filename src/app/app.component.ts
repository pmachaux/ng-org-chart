import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    id: 1,
    children: [
      {id:2, children:[{id:3, children: [{id:4}]}, {id:5, children:[]}]}
    ]
  }
}
