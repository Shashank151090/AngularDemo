import { UserService } from './../user.service';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8000/api/upload';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private userService: UserService,
     private router: Router,
    ) {
      this.items = [
        { name: '../assets/images/akash_01.jpg' },
        { name: '../assets/images/akash_01.jpg' },
        { name: '../assets/images/akash_01.jpg' },
      ];
    }
  items: Array<any> = [];
  users: any[] = [];
  results: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    // this.users = null;
    this.getUsers();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }
getUsers () {
this.searchService.searchAllUsers()
    .subscribe(
      (results: any) => {
      // console.log(JSON.parse(results["_body"]).data)
      this.users = JSON.parse(results['_body']);
     console.log(this.users);
    });
}
viewProfile (id) {
   this.router.navigate(['/profile']);
   this.userService.userData(id);
}
}
