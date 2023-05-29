import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlApp = 'http://127.0.0.1:5000/process'
  constructor(private http: HttpClient) { }

  public postOpenIA(body:{}): Observable<any>{
    return this.http.post(this.urlApp,body)
  }
}
