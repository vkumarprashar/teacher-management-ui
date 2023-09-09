import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor( public fb: FormBuilder, public subjectservice : SubjectserviceService, public toastrServiceService: ToastrServiceService){

  }
  addNewTeacherForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.addNewTeacherForm = this.fb.group({
      teacherName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9 ]{12}"),
      ]),
      rate: new FormControl('', [
        Validators.required
      ]),
      aadhar: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      pancard: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      qualification:new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
    });
  }
  onSubmitTeacherForm(){
   const body =  {
      name: this.addNewTeacherForm.get("teacherName")?.value,
      contact: this.addNewTeacherForm.get("contact")?.value,
      homeAddress: this.addNewTeacherForm.get("address")?.value,
      qualification:this.addNewTeacherForm.get("qualification")?.value,
      aadharCard: this.addNewTeacherForm.get("aadhar")?.value,
      panCard: this.addNewTeacherForm.get("pancard")?.value,
      billingRatePerHour: this.addNewTeacherForm.get("rate")?.value
    }

    this.subjectservice.addNewTeacher(body).subscribe((data : any) => {
      this.addNewTeacherForm.reset();
      this.toastrServiceService.showSuccess(
        `Teacher Added Successfully,
         Username = ${data?.login}
         Password = ${data?.password}`
      );

    }),
    (error: Error) => {
      this.toastrServiceService.showError('ERROR', 'Please try again!!');
    }

  }

}
