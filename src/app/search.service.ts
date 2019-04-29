import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class SearchService {
baseUrl = 'http://localhost:8000/friend';
// tslint:disable-next-line: deprecation
constructor(private _http: Http) { }
search(queryString: string, id: string) {
      const _URL = this.baseUrl + '/' + id;
      return this._http.get(_URL);
  }
  searchAllUsers() {
    const _URL = this.baseUrl + '/getList';
    return this._http.get(_URL);
  }
  addNewUser(user) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const _URL = this.baseUrl + '/create';
    this._http.post(_URL, user)
    .subscribe(data => {
      console.log(data);
    });
  }
  updateUser(id, data) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const _URL = this.baseUrl + '/' + id + '/update';
    this._http.put(_URL, data)
    .subscribe(res => {
      console.log(res);
    });
  }
}
