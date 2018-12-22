import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beginnings';

  counter:number = 0;

  bump(){
    this.counter++;
  }

  talk(){
    alert(`it is working and the counter is ${this.counter}!`);
  }
}
