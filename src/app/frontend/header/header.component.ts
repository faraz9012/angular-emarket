import { Component,OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor (
    public siteInfo:GlobalService,
    public cartItems:ProductsService 
    ){}
    ngOnInit(){
    }
    removeCartItem(value: any){
      this.cartItems.products.splice(value, 1);
    }
}
