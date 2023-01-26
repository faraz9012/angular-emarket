import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoresComponent,
    SingleProductPageComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FrontendModule { 
}
