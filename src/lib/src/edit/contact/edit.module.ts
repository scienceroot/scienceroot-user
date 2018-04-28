import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {ScrUserContactModule} from '../../core/contact/contact.module';
import {ScrUserContactEditComponent} from './edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ScrUserContactModule
  ],
  declarations: [
    ScrUserContactEditComponent
  ],
  exports: [
    ScrUserContactEditComponent
  ],
  providers: []
})
export class ScrUserContactEditModule {

}
