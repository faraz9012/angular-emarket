import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  cd = inject(ChangeDetectorRef);
  router = inject(Router);
  siteInfo = inject(GlobalService);

  title: string = '';
  stores: any = [];
  subCategories: any = [];
  pageListItems: any = [];


  constructor(private route: ActivatedRoute) {
    route.params.subscribe((v: any) => {
      this.title = v.slug;
    });
    this.siteInfo.storeName = this.title;
  }

  ngOnInit() {
    this.stores = localStorage.getItem('store');
    this.subCategories = JSON.parse(this.stores).subCategories;
  }

  setPaginatedDataLimit(event:any) {
    this.pageListItems = event;
    this.cd.detectChanges();
  }

  getProduct(slug: any) {
    localStorage.setItem('product', JSON.stringify(slug));
    return this.router.navigate(["/product", slug.subCategoryName])
  }


}
