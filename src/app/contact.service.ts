import { Injectable } from '@angular/core';
import { contact } from "./contact/contact";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import {BehaviorSubject} from  "rxjs/BehaviorSubject"

@Injectable()
export class ContactService {

  private apiUrl = 'http://localhost:8080/contacts'; // l'url de mon api(java) en local   
  /* 
  // Pour le test
  private contacts = new BehaviorSubject<any>([
    {
      "firstName" : "Souhaila",
      "lastName" : "Mounach",
      "fullName" : "Souhaila MOUNACH",
      "email" : "Souhaila@test.com",
    },
    {
      "firstName" : "Mouad",
      "lastName" : "Mounach",
      "fullName" : "Mouad MOUNACH",
      "email" : "Mouad@test.com",
    },
    {
      "firstName" : "Marwa",
      "lastName" : "Mounach",
      "fullName" : "Marwa MOUNACH",
      "email" : "Mawa@test.com",
    }
  ]);
  contact = this.contacts.asObservable();
  */
  
   constructor(private http: Http) {
   }
  
  
  
  findAll(): Observable<contact[]>  {
     return this.http.get(this.apiUrl)
       .map((res:Response) => res.json())
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
  
   findById(id: number): Observable<contact> {
    return this.http.get(this.apiUrl + '/' + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));

   }
  
   saveContact(conTact: contact): Observable<contact> {
    return this.http.post(this.apiUrl, conTact)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
  
   deleteContactById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
  
   updateContact(conTact: contact): Observable<contact> {
    return this.http.put(this.apiUrl, conTact)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   } 
  


}
