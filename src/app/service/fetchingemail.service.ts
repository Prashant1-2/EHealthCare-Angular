import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingemailService {

  constructor(private http : HttpClient) {}

   private baseUrl = 'http://localhost:8080/user'

   getUser(userinit: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/username1/${userinit}`)
    }

 
}
