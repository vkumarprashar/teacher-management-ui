import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherdashboardComponent } from './teacherdashboard.component';
import { TeacherdashboardRoutingModule } from './teacherdashboard-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TeacherdashboardComponent
  ],
  imports: [
    CommonModule,
    TeacherdashboardRoutingModule,
    MatTableModule
  ]
})
export class TeacherdashboardModule { }
