import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null
    },
    component: TeacherdashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherdashboardRoutingModule {}
