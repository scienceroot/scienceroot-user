import {Component} from "@angular/core";

@Component({
  selector: 'scr-user-details-link-login',
  template: `
    <div  fxLayout="column"
          class="menu-item"
          fxLayoutAlign="center center">
      <div  fxFlex="40px">
        <button mat-raised-button=""
                color="accent"
                [routerLink]="['/login']">
          Login
        </button>
      </div>
    </div>
  `,
  styles: [`
    .menu-item {
      height: 64px;
    }
  `]
})
export class ScrUserDetailsLinkLoginComponent {

}
