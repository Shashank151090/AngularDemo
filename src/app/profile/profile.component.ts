import { Component, OnInit } from '@angular/core';
import { UserService} from './../user.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService : UserService,
    private searchService : SearchService,
    private router : Router
  ) { }
userData : any
user: any[] = [];
  ngOnInit() {
    this.userData = this.userService.users;
    console.log(this.userData);

    this.searchUser(this.userData.first_name, this.userData.id)
  }
searchUser(user,id){
  console.log(user)
  this.searchService.search(user,id)
    .subscribe(
      (results : any) =>{
      // console.log(JSON.parse(results["_body"]).data)
      this.user = JSON.parse(results["_body"]);
     console.log(this.user)
    })
}
  goBack = function(){
    this.router.navigate('');
  }
  
}
