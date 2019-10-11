import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserLogin } from './shared/models/userlogin';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { DashboardService } from '../app/pages/dashboard/dashboard.service';
import { HttpService } from './shared/services/http.service';
import { InterceptService } from './shared/services/intercept.service';
import { UserProfileService } from './pages/user-profile/user-profile.service';

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
    ToastContainerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    
  ],
  providers: [
    UserLogin,
    DashboardService,
    HttpService,
    UserProfileService,
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
