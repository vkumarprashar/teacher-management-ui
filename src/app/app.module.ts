import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/@core/authentication/authentication.module';
import { SharedModule } from './modules/@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchooldashboardModule } from './modules/@feature/schooldashboard/schooldashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './modules/@shared/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    SchooldashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
