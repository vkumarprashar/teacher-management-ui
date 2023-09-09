import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { SchoolComponent } from './components/school/school.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    SchoolComponent,
    SubjectComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
