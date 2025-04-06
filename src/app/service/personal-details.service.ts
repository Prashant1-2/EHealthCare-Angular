import { PersonalDetails } from './../model/personalDetails';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { personalusers } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService{

  constructor(private http : HttpClient) {}

   private baseUrl = 'http://localhost:8080/personal'
   private updateurl = 'http://localhost:8080/personal/updatepersonal/this.userObj.id'
   private saveurl='http://localhost:8080/personal/adduser';



getUser(username: string): Observable<any>{
return this.http.get(`${this.baseUrl}/username1/${username}`)
}
getUserbyid(id: number): Observable<any>{
  return this.http.get(`${this.baseUrl}/userbyid/${id}`)
  }
saveuser(personaluser: personalusers){
  console.log("inside savepersonaluser" + personaluser);
  console.log("inside savepersonaluser" + this.saveurl);
  return this.http.post(`${this.saveurl}`,personaluser);
}

updateUser(user :PersonalDetails ){ return this.http.put(`${this.updateurl}`,user)}

}
