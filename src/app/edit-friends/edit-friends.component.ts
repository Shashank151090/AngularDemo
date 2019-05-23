import { EditUserService } from './../edit-user.service';
import { SearchService } from './../search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-friends',
  templateUrl: './edit-friends.component.html',
  styleUrls: ['./edit-friends.component.css']
})
export class EditFriendsComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  userData: any;
  constructor(private formBuilder: FormBuilder, private searchService: SearchService, private editUserService: EditUserService) { }

  ngOnInit() {
this.userData = this.editUserService.editUserData();
    this.editForm = this.formBuilder.group({
      first_name: [this.userData.first_name, Validators.required],
      last_name: [this.userData.last_name, Validators.required],
      contact: [this.userData.contact, Validators.required],
      dob: [this.userData.dob],
      currentCity: [this.userData.currentCity],
      hometown: [this.userData.hometown],
      college: [this.userData.education.college],
      school: [this.userData.education.school],
      present: [this.userData.work.present],

    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    console.log(this.userData._id, this.editForm.value);
    this.searchService.updateUser(this.userData._id, this.editForm.value);
    // this.searchService.addNewUser(this.editForm.value);
  }
}
