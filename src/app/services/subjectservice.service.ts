import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectserviceService {
    reset() {
      throw new Error('Method not implemented.');
    }

    public baseUrl: string = "";

    constructor(private http: HttpClient) { }
  
    addNewSubject(body: any) {
      this.baseUrl = "http://143.244.130.119:8080/api/subjects";
      let header = new HttpHeaders();
      header.append('accept', 'application/json');
      return this.http.post(this.baseUrl , body, {
        headers: header
      });
    }

    addNewTeacher(body: any) {
      this.baseUrl ="http://143.244.130.119:8080/api/teachers";
      let header = new HttpHeaders();
      header.append('accept', 'application/json');
      return this.http.post(this.baseUrl , body, {
        headers: header
      });
    }

    addNewSchool(body: any) {
      this.baseUrl ="http://143.244.130.119:8080/api/schools";
      let header = new HttpHeaders();
      header.append('accept', 'application/json');
      return this.http.post(this.baseUrl , body, {
        headers: header
      });
    }
    getschools() {
      this.baseUrl ="http://143.244.130.119:8080/api/schools";
      return this.http.get(this.baseUrl);
    }

    getsubjects() {
      this.baseUrl ="http://143.244.130.119:8080/api/subjects";
      return this.http.get(this.baseUrl);
    }

    getteachers() {
      this.baseUrl ="http://143.244.130.119:8080/api/teachers";
      return this.http.get(this.baseUrl);
    }

    getClasses() {
      this.baseUrl ="http://143.244.130.119:8080/api/scheduled-classes";
      return this.http.get(this.baseUrl);
    }

    addNewClass(body:any){
      this.baseUrl = "http://143.244.130.119:8080/api/scheduled-classes";
      let header = new HttpHeaders();
      header.append('accept', 'application/json');
      return this.http.post(this.baseUrl , body, {
        headers: header
      });
    }
  }
