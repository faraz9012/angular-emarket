import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  category = inject(CategoriesService);
  router =inject(Router);
  
  limit = 3;
  loadMoreButton = true

  get limitedCategories() {
    return this.category.categories.slice(0, this.limit)
  }

  onLoadMore() {
    this.limit = Infinity;
    this.loadMoreButton = false
  }

  getStores(slug: any) {
    localStorage.setItem('store', JSON.stringify(slug))
    return this.router.navigate(["/store", slug.categoryName])
  }
}
