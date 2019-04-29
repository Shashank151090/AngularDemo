import { SearchService } from './../search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  activeUsers: any = [];

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
          contact: ['', Validators.required]
      });
      this.activeUsers = localStorage.getItem('activeUsers');
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
console.log(this.registerForm.value);
    this.searchService.addNewUser(this.registerForm.value);
}
}
