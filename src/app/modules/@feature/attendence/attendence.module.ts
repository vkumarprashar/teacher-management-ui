import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendenceComponent } from './attendence.component';
import { AttendenceRoutingModule } from './attendence-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AttendenceComponent
  ],
  imports: [
    CommonModule,
    AttendenceRoutingModule,
    MatTableModule
  ]
})
export class AttendenceModule { }
