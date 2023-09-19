import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { SubjectserviceService } from 'src/app/services/subjectservice.service';
import { ToastrServiceService } from 'src/app/services/toastr-service/toastr-service.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
})
export class AttendenceComponent implements OnInit {

  displayedColumns: string[] = ['schoolName', 'teacherName', 'startTime', 'EndTime', 'subject', 'status', 'approve'];
  dataSource: any = new MatTableDataSource([]);
  constructor( public fb: FormBuilder, public subjectservice : SubjectserviceService, public toastrServiceService: ToastrServiceService,
    public dialogservice:DialogService){
  }
  ngOnInit(){
    this.subjectservice.getClasses().subscribe((data : any) => {
      this.dataSource.data = data;
  
  }),
    (error: Error) => {
      this.toastrServiceService.showError('ERROR', 'Fetching the class details');
    }
  }

  approve(element: any) {

    console.log(element);
    this.dialogservice
      .openConfirmDialog('Are you sure you want to approve this Class?')
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          // const id = event.element.leaveRequestApplicationId;
          // let params = new HttpParams();
          // params = params.set('approverRemarks', 'Ok');
          // params = params.set('currentId', this.userId);
          // params = params.set('leaveRequestApplicationId', id);
          // params = params.set('status', 'APPROVED');
          // this.leave.patchleave(params).subscribe(
          //   (data) => {
          //     this.toastrServiceService.showSuccess(
          //       'Leave Approved Successfully !!'
          //     );
          //     this.getleave();
          //     this.getreviewleave();
          //   },
          //   (error) => {
          //     this.toastrServiceService.showError(error.error.object, 'Error');
          //   }
          // );
        }
      });
  }

}
