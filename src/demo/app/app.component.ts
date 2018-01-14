import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>
      <h1>@scienceroot/user</h1>
      <ul>
        <li>
          <a [routerLink]="['']">Home</a>
        </li>
      </ul>

    </div>

    <div  fxLayout="row"
          fxLayoutAlign="center">
      <div  fxFlex="90%"
            fxFlex.lt-md="100%"
            fxFlex.lt-lg="90%"
            fxFlex.xl="75%">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class AppComponent {

}

