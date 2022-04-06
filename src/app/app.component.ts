import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cls-ebuttons-ui';

  doSomething(ev: Event, action: string, p?: number) {
    console.log(ev);
    console.log(`%cJust made a ${action}`, 'background-color: blue;');
  }
  doSomething2(ev: Event) {
    console.log(ev);
    console.log(`%cMouse is over me`, 'background-color: brown;');
  }

}
