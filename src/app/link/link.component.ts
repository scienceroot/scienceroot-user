import {Component} from '@angular/core';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: '',
  template: `
    <div  fxLayout="row"
          fxLayoutGap="24px">
      <div fxFlex="100px">
        <button (click)="set();">
          <span>Set ActiveUser</span>
        </button>
      </div>
      <div fxFlex="120px">
        <button (click)="reset();">
          <span>Reset ActiveUser</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserLinkDemoComponent {

  public activeUser: ScrUser;

  private _dummy: ScrUser = new ScrUser();

  constructor(
    private _activeUserService: ScrActiveUserService
  ) {
  }

  public set() {
    this.activeUser = this._dummy;
    this._emit();
  }

  public reset() {
    this.activeUser = null;
    this._emit();
  }

  private _emit() {
    this._activeUserService.set(this.activeUser);
  }
}
