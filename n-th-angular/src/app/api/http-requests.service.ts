import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  baseURL = 'http://127.0.0.1:8000'
  httpHeaders =new HttpHeaders({
    'Content-Type': 'application/json'
    });
  constructor(private http: HttpClient) { }

  getHistory():Observable<any>{
    return this.http.get(this.baseURL + "/fibonacci/",
    {headers: this.httpHeaders});
  }
  addNumber(data: any):Observable<any>{
    const body = {FibonacciNumber: data.num, time: "2021-05-02T06:00:00Z"}
    // console.log(body);
    return this.http.post(this.baseURL + "/fibonacci/", body,  {headers: this.httpHeaders});
  }
}
