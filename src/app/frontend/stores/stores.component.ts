import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  title: string = '';
  stores: any = '';
  subCategories : any =[];

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((v: any) => {
      console.log('slug value', v.slug);
      this.title = v.slug;
    });

  }
  ngOnInit(){
    this.stores = localStorage.getItem('store');
    this.subCategories = JSON.parse(this.stores).subCategories;
    // console.log(JSON.parse(this.stores).subCategories);
    console.log(this.subCategories);
  }
}
