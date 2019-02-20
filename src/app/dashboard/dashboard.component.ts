import { UserService } from './../user.service';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private userService: UserService,
     private router : Router,
    ) { 
      this.items = [
        { name: '../assets/images/akash_01.jpg' },
        { name: '../assets/images/akash_01.jpg' },
        { name: '../assets/images/akash_01.jpg' },
        
      ]
    }
  items: Array<any> = []
  users: any[] = [];
  results: any;
  ngOnInit() {
    this.users=null;
    this.getUsers()
  }
getUsers (){
this.searchService.searchAllUsers()
    .subscribe(
      (results : any) =>{
      // console.log(JSON.parse(results["_body"]).data)
      this.users = JSON.parse(results["_body"]).data;
     console.log(this.users)
    })
}
viewProfile (id) {
   this.router.navigate(["/profile"]);
   this.userService.userData(id)
}
}
