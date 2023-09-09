import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent  implements OnInit{

  teachers:any;

  constructor( public fb: FormBuilder,  private subjectservice: SubjectserviceService, private toastrservice:ToastrServiceService){


  }
  addBilling: FormGroup = new FormGroup({});


  ngOnInit(): void {
    this.addBilling = this.fb.group({
      teacherId : new FormControl('', [
        Validators.required
      ]),
      teacherName: new FormControl('', [
        Validators.required
      ]),
    });
    this.subjectservice.getteachers().subscribe((data) => {
      this.teachers = data;
      console.log(data)
    })
  }


}
