import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1>' +
      '<courses>Loading...</courses>' +
      '<authors>Loading...</authors>',
})
export class AppComponent  { name = 'Angular'; }
