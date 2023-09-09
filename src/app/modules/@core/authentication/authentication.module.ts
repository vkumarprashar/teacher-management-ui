import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule} from '@angular/router';
import { AuthenticationRoutingModule } from './authentiation-routing.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
  ],

})
export class AuthenticationModule{


}
