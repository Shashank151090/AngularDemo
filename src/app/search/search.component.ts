import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]

})
export class SearchComponent implements OnInit {

  results: any;
  searchText: any;
  constructor(private searchService: SearchService) {
    
   }
doSearch(){
  this.searchService.search(this.searchText)
  .subscribe(results => {
    console.log(results)
  });
}
  ngOnInit() {
  }

}
