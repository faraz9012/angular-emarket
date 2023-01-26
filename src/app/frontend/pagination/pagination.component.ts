import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'frontend-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() skip?: any;
  @Input() limit?: any;
  @Input() dataSource: any = [];
  @Output() onLimitDisplayItems = new EventEmitter();


  pageNumber?: number;

  limitItems: any = [];
  totalPages: any = [];
  selectedIndex?: number;

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.totalPages = new Array(Math.ceil(this.dataSource.length / this.limit))
    this.selectPageNumber(0);

  }

  selectPageNumber(pageNumber: number) {
    this.skip = pageNumber * this.limit;
    this.selectedIndex = pageNumber;
    this.limitItems =this.dataSource.slice(this.skip, this.limit + this.skip)
    this.getPaginatedDataLimit(this.limitItems)
  }
  getPaginatedDataLimit(value: any) {
    this.onLimitDisplayItems.emit(value);
  }


}
