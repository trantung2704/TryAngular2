import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1>' +
      '<courses>Loading...</courses>' +
      '<authors>Loading...</authors>' +
      '<star [isFavorite]="false" (updated)="onUpdated($event)">Loading...</star>',
})
export class AppComponent {
    name = 'Angular'; 

    onUpdated($event) {
        console.log($event.message);
        alert($event.message);
    }
}
