import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div class="menu">
      <div class="logo-container">
        <img src="" alt="" />
      </div>
      <div fxLayout="row">
        <div fxFlex="">

        </div>
      </div>
    </div>
    <div style="padding: 24px">
      <div  fxLayout="row"
            fxLayoutAlign="center">
        <div  fxFlex="90%"
              fxFlex.lt-md="100%"
              fxFlex.lt-lg="90%"
              fxFlex.xl="75%">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu {
      padding: 8px 24px;
      background-color: #B1B7C1;
    }

    .menu .logo-container {
      height: 48px;
      width: 48px;
    }
  `]
})
export class AppComponent {

}

