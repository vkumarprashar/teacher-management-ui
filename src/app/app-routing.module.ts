import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSharedComponent } from './modules/@shared/school-shared/school-shared.component';
import { SharedComponent } from './modules/@shared/shared.component';
import { TeacherSharedComponent } from './modules/@shared/teacher-shared/teacher-shared.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/@core/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin',
    component: SharedComponent,
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/@feature/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'class',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/@feature/class/class.module').then(
            (m) => m.ClassModule
          ),
      },
      {
        path: 'attendence',
        pathMatch: 'full',
        loadChildren: () =>
        import('./modules/@feature/attendence/attendence.module').then(
          (m) => m.AttendenceModule
        ),
      },
      {
        path: 'billing',
        pathMatch: 'full',
        loadChildren: () =>
        import('./modules/@feature/billing/billing.module').then(
          (m) => m.BillingModule
        ),   
      },
    ]
  },
  {
    path: 'school',
    component: SchoolSharedComponent ,
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/@feature/schooldashboard/schooldashboard.module').then(
            (m) => m.SchooldashboardModule
          ),
      }
    ]
  },
  {
    path: 'teacher',
    component: TeacherSharedComponent ,
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/@feature/teacherdashboard/teacherdashboard.module').then(
            (m) => m.TeacherdashboardModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
