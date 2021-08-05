import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    PasswordResetRequestComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AuthModule { }
