import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  router =inject(Router);
  siteInfo =inject(GlobalService);
  category =inject(CategoriesService);

  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  lavbore et dolore magna aliqua.";
  getStores(slug: any) {
    localStorage.setItem('store', JSON.stringify(slug))
    return this.router.navigate(["/store", slug.categoryName])
  }
}
