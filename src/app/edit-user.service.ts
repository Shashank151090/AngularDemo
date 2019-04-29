import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  userData = [];

  constructor() { }
  editUserData() {
    return this.userData;
  }
}
