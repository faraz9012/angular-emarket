import { Component,  inject,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
   skip = 0;
   limit = 8;
  router =inject(Router);
  siteInfo =inject(GlobalService);
  storesCount =inject(CategoriesService);

  title: string = '';
  stores: any = '';
  subCategories : any =[];
  paginatedItems : any =[];
  currentPage =1;
  pageList: any =[];
  selectedIndex?: number;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((v: any) => {
      this.title = v.slug;
    });

   this.siteInfo.storeName = this.title;   
  }



  ngOnInit(){
    this.stores = localStorage.getItem('store');
    this.subCategories = JSON.parse(this.stores).subCategories;
    this.paginatedItems = this.subCategories.slice(0, 8)
    this.pageList = new Array(Math.ceil(this.subCategories.length/this.paginatedItems.length));

    this.selectPageNumber(0);
  }
  getProduct(slug: any ) {
    localStorage.setItem('product', JSON.stringify(slug));
    return this.router.navigate(["/product", slug.subCategoryName])
  }

  selectPageNumber(pageNumber: number) {
    this.skip = pageNumber*this.limit;
    this.paginatedItems = this.subCategories.slice(this.skip, this.skip+this.limit)
    this.selectedIndex = pageNumber;    
  }
}
