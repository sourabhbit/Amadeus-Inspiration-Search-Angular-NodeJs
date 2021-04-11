import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  endpoint: string = 'http://localhost:2800';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  
  get(data:any): Observable<any> {
    let API_URL = `${this.endpoint}/inspirationSearch`;
    var datas = this.http.post(API_URL, data)
    return datas;
  }
}