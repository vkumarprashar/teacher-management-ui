import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public baseUrl = "http://localhost:8080/api/users/login";

  constructor(private http: HttpClient) { }

  addNewEntity(body: any) {
    let header = new HttpHeaders();
    header.append('accept', 'application/json');
    return this.http.post(this.baseUrl , body, {
      headers: header
    });
  }
}
