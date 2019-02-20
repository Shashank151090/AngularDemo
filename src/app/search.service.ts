import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class SearchService {
baseUrl: string = './assets/json/users.json';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl +'/'+ queryString;
      return this._http.get(_URL);
  }
  searchAllUsers(){
    let _URL = this.baseUrl;
    return this._http.get(_URL);
  }
}