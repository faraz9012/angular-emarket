import { Component,inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { GlobalService } from 'src/app/global.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  router =inject(Router);
  siteInfo =inject(GlobalService);
  cartItems =inject(ProductsService);
  categoryItems =inject(CategoriesService);
    
    ngOnInit(){
    }
    removeCartItem(value: any){
      this.cartItems.products.splice(value, 1);
    }
    getStores(slug: any) {
      localStorage.setItem('store', JSON.stringify(slug))
      return this.router.navigate(["/store", slug.categoryName])
    }
}
