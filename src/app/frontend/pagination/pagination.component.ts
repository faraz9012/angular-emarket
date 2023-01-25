import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'frontend-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
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
    console.log("Data source length: ",this.dataSource.length);
    console.log("Skip: ",this.skip);
    console.log("Limit: ",this.limit);
    console.log("Items after skip & limit Limit: ",this.limitItems);
    console.log("Total pages: ", this.totalPages );
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
    console.log("Value emitted from pagination component", value);
  }


}
