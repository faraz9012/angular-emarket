import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor (
    public siteInfo:GlobalService,
    public category:CategoriesService
     ){}
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  lavbore et dolore magna aliqua.";
}
