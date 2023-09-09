import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchooldashboardComponent } from './schooldashboard.component';
import { SchoolDashboardRoutingModule } from './schooldashboard-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    SchooldashboardComponent
  ],
  imports: [
    CommonModule,
    SchoolDashboardRoutingModule,
    MatTableModule
  ]
})
export class SchooldashboardModule { }
