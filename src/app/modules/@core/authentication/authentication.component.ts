import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit{

  loginForm: FormGroup;
  logoUrl: string = '';
  school : boolean = true;


  constructor(private formBuilder: FormBuilder,  private router: Router, private authservice : AuthserviceService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  
  }

  ngOnInit(): void {
    this.loadLogo();
  }
  loadLogo() {
    const logoUrl = 'https://avatars.githubusercontent.com/u/124091983';
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted');
    } else {
      return;
    }
  }

  login() {

    const body = {
      id: null,
      login: this.loginForm.get("username")?.value,
      password: this.loginForm.get("password")?.value,
      role: null,
      teacher:null,
      school: null
    }

    console.log(body);

      this.authservice.addNewEntity(body).subscribe((data : any) => {
          if(data?.role == "ADMIN" ){
            this.router.navigate(['/admin/dashboard']);
          }
          else if( data?.role == "TEACHER"){
            this.router.navigate(['/teacher/dashboard']);
          }
          else {
            this.router.navigate(['/school/dashboard']);
          }
      })
   

  }

}
