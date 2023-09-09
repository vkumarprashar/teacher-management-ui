import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

//Component
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedComponent } from './shared.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarToggleComponent } from './sidebar-toggle/sidebar-toggle.component';
import { SchoolSharedComponent } from './school-shared/school-shared.component';
import { SchoolSidebarComponent } from './school-sidebar/school-sidebar.component';
import { TeacherSharedComponent } from './teacher-shared/teacher-shared.component';
import { TeacherSidebarComponent } from './teacher-sidebar/teacher-sidebar.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SharedComponent,
    SidebarToggleComponent,
    SchoolSharedComponent,
    SchoolSidebarComponent,
    TeacherSharedComponent,
    TeacherSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatMenuModule,
    
  ],

  exports: [
    HeaderComponent,
    SidebarComponent,
    SharedComponent,
  ],
  providers: [],
})
export class SharedModule {}
