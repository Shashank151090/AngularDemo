import { SearchComponent } from './search/search.component';
import { Injectable } from '@angular/core';
import  { SearchService } from './search.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private searchService: SearchService
  ) { }
  users: any[] = [];
  userData(id) {
  // this.searchService.search(id.id)
  //   .subscribe( result =>{
  //     this.users=JSON.parse(result["_body"]).data;
  //     console.log(this.users)
  //   })

  this.users = id;
  console.log(this.users);
  }
}
