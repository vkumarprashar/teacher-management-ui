import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  constructor( public fb: FormBuilder, private subjectservice: SubjectserviceService, private toastrServiceService: ToastrServiceService){

  }
  addNewSubjectForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.addNewSubjectForm = this.fb.group({
      subjectName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      
    });
  }
  onSubmitSubjectForm(){
    const body = {
      name : this.addNewSubjectForm.get("subjectName")?.value,
      scheduledClass : null
    }

    this.subjectservice.addNewSubject(body).subscribe((data)=> {
      console.log(data);
      this.addNewSubjectForm.reset();
  

    })

    console.log(this.toastrServiceService);

    this.toastrServiceService.showSuccess(
      'Subject Added Successfully !!'
    );




  }

}
