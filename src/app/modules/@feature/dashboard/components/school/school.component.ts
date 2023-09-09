import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit{
  constructor( public fb: FormBuilder, private subjectservice: SubjectserviceService, private toastrservice:ToastrServiceService){

  }
  addNewSchoolForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.addNewSchoolForm = this.fb.group({
      schoolName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      principalName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      principalEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      principalContact: new FormControl('', [
        Validators.required,
      ]),
      affiliatedTo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      number: new FormControl('', [
        Validators.required
      ]),
      wanumber: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      name2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      number2: new FormControl('', [
        Validators.required
      ]),
      wanumber2: new FormControl('', [
        Validators.required
      ]),
      email2: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
  onSubmitSchoolForm(){

    const body = {
      schoolName: this.addNewSchoolForm.get("schoolName")?.value,
      affiliatedTo: this.addNewSchoolForm.get("affiliatedTo")?.value,
      address: this.addNewSchoolForm.get("schoolName")?.value,
      principal: {
        principalName:this.addNewSchoolForm.get("principalName")?.value,
        principalEmail: this.addNewSchoolForm.get("principalEmail")?.value,
        principalContact: this.addNewSchoolForm.get("principalContact")?.value
      },
      pointsOfContact: [
        {
    
          pointOfContactName: this.addNewSchoolForm.get("name")?.value,
          phoneNumber: this.addNewSchoolForm.get("number")?.value,
          whatsappNumber:this.addNewSchoolForm.get("wanumber")?.value,
          email: this.addNewSchoolForm.get("email")?.value
        }
      ]
    }

    this.subjectservice.addNewSchool(body).subscribe((data : any) => {
      this.addNewSchoolForm.reset();
      this.toastrservice.showSuccess(
        `School Added Successfully,
         Username = ${data?.login}
         Password = ${data?.password}`
      );

    }),
    (error: Error) => {
      this.toastrservice.showError('ERROR', 'Please try again!!');
    }

  }

}
