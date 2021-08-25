import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  body{
    text-align:center;
  }
  h1{
    margin: 20px auto;
  }
  `]
})
export class AppComponent {
  title = 'assignment1';
}
