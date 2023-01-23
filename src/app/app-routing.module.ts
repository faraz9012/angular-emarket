import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { SingleProductPageComponent } from './frontend/single-product-page/single-product-page.component';
import { StoresComponent } from './frontend/stores/stores.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'store/:slug',component:StoresComponent
  },  
  {
    path:'product/:slug',component:SingleProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
