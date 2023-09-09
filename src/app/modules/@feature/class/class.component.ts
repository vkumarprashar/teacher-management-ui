import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  schools:any;
  subjects: any;
  teachers:any;

  startTimeArray:any=["07:00 AM","08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",  "1:00 PM",  "2:00 PM", "3:00 PM",  "4:00 PM", "5:00 PM",  "6:00 PM", "7:00 PM", "8:00 PM"];
  endTimeArray:any=["07:00 AM","08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",  "1:00 PM",  "2:00 PM", "3:00 PM",  "4:00 PM", "5:00 PM",  "6:00 PM", "7:00 PM", "8:00 PM"];
  timeArray:any=[{value:700,text:"07:00 AM"},{value:800,text:"08:00 AM"},{value:900,text: "09:00 AM"},{value:1000,text: "10:00 AM"},{value:1100,text: "11:00 AM"},{value:1200,text: "12:00 PM"},{value:1300,text:  "1:00 PM"},{value:1400,text:  "2:00 PM"},{value:1500,text: "3:00 PM"},{value:1600,text:  "4:00 PM"},{value:1700,text: "5:00 PM"},{value:1800,text:  "6:00 PM"},{value:1900,text: "7:00 PM"},{value:2000,text: "8:00 PM"}];

  constructor( public fb: FormBuilder,  private subjectservice: SubjectserviceService, private toastrservice:ToastrServiceService){


  }
  addClass: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.addClass = this.fb.group({
      schoolName : new FormControl('', [
        Validators.required
      ]),
      teacherName: new FormControl('', [
        Validators.required
      ]),
      subjectName: new FormControl('', [
        Validators.required
      ]),
      link:  new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      startAt:  new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
      endAt:  new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
      ]),
    });

    this.subjectservice.getschools().subscribe((data) => {
      this.schools = data;
      console.log(data)
    })
    this.subjectservice.getsubjects().subscribe((data) => {
      this.subjects = data;
      console.log(data)
    })
    this.subjectservice.getteachers().subscribe((data) => {
      this.teachers = data;
      console.log(data)
    })


}
onSubmitClas(){
  const body = {
    description: "Class Scheduled",
    schoolId: this.addClass.get("schoolName")?.value,
    teacherId: this.addClass.get("teacherName")?.value,
    startDateTime: this.addClass.get("startAt")?.value,
    endDateTime: this.addClass.get("endAt")?.value,
    subjectId: this.addClass.get("subjectName")?.value,
    teamsLink: this.addClass.get("link")?.value,
    approvedDateTime: "",
    scheduledClassStatus: "SCHEDULED"
  }

  console.log(body);

  this.subjectservice.addNewClass(body).subscribe((data)=> {

    console.log(data);
    this.toastrservice.showSuccess('Class Scheduled Successfully!!')

  }),
  (error: Error) => {
    this.toastrservice.showError('ERROR', 'Please try again!!');
  }


}
}
