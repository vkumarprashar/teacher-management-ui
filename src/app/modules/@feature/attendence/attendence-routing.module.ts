import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendenceComponent } from './attendence.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null
    },
    component: AttendenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendenceRoutingModule {}