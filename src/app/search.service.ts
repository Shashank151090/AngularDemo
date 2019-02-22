import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class SearchService {
baseUrl: string = './assets/json';
constructor(private _http: Http) { }
search(queryString: string, id: string) {
      let _URL = this.baseUrl +'/userDetails/'+ queryString +'_'+id+'.json';
      return this._http.get(_URL);
  }
  searchAllUsers(){
    let _URL = this.baseUrl+'/users.json';
    return this._http.get(_URL);
  }
}