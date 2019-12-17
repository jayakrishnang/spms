import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserLogin } from './shared/models/userlogin';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { DashboardService } from '../app/pages/dashboard/dashboard.service';
import { HttpService } from './shared/services/http.service';
import { InterceptService } from './shared/services/intercept.service';
import { UserProfileService } from './pages/user-profile/user-profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SheetsService } from './pages/sheets/sheets.service';
import { SheetsShowService } from './pages/sheets-show/sheets-show.service';
import { PendingApprovalsService } from './pages/pending-approvals/pending-approvals.service';
import { ActivityService } from './pages/activities/activity_service';
import { ActivityCreate } from './shared/models/activity';
import { Filter } from './shared/models/filter';
import { RejectedSheetsService } from './pages/rejected-sheets/rejected-sheets.service';
import { ApprovedSheetsService } from './pages/approved-sheets/approved-sheets.service';
import { ForgotPasswordService } from './pages/forgot-password/forgot-password.service';
import { ResetPasswordService } from './pages/reset-password/reset-password.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ReactiveFormsModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    UserLogin,
    ActivityCreate,
    DashboardService,
    HttpService,
    UserProfileService,
    SheetsService,
    SheetsShowService,
    PendingApprovalsService,
    RejectedSheetsService,
    ApprovedSheetsService,
    ForgotPasswordService,
    ResetPasswordService,
    Filter,
    ActivityService,
    InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
