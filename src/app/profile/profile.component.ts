import { Component, OnInit } from '@angular/core';
import { UserService} from './../user.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { EditUserService } from '../edit-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private editUserService: EditUserService,
    private searchService: SearchService,
    private router: Router
  ) { }
userData: any;
user: any[] = [];
public CData: number;
  ngOnInit() {
     this.userData = this.userService.users;
     console.log(this.userData);

    this.searchUser(this.userData.first_name, this.userData._id);
  }
searchUser(user, id) {
  console.log(user, id);
  this.searchService.search(user, id)
    .subscribe(
      (results: any) => {
      // console.log(JSON.parse(results["_body"]).data)
      this.user = JSON.parse(results['_body']);
     console.log(this.user);
    });
}
  goBack = function() {
    this.router.navigate(['/dashboard']);
  };
  openEditUser(user) {
    this.router.navigate(['/edit']);
    console.log(user);
    this.editUserService.userData = (user);
  }
}
