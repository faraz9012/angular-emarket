import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css']
})
export class SingleProductPageComponent implements OnInit {  

  router = inject(Router);
  
  productTitle: string = '';
  product: any = '';
  storeTitle: any = '';
  subCategory : any =[];
  siteInfo =inject(GlobalService);

  
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((v: any) => {
      this.productTitle = v.slug;
    });
    this.storeTitle = this.siteInfo.storeName;
  }
  ngOnInit() {
    this.subCategory = localStorage.getItem('product');
    this.product = JSON.parse(this.subCategory);
  }

}
