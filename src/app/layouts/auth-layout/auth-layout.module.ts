import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { InterceptService } from 'src/app/shared/services/intercept.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ForgotPasswordService } from 'src/app/pages/forgot-password/forgot-password.service';
import { ForgotPassword } from 'src/app/shared/models/forgot_password';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { ResetPasswordService } from 'src/app/pages/reset-password/reset-password.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
    // NgbModule
  ],
  providers: [
		InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
    },ForgotPasswordService, ForgotPassword,ResetPasswordService
	],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,ResetPasswordComponent
  ]
})
export class AuthLayoutModule { }
