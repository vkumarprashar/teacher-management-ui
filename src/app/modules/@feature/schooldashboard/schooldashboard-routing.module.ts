import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchooldashboardComponent } from './schooldashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null
    },
    component: SchooldashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolDashboardRoutingModule {}
