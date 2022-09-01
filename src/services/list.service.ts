import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { get } from 'src/app/json';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiurl = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get<any>(this.apiurl)

  }
}
