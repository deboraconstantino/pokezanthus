import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
