import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SheetsComponent } from 'src/app/pages/sheets/sheets.component';
import { SheetsShowComponent } from 'src/app/pages/sheets-show/sheets-show.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { PendingApprovalsComponent } from 'src/app/pages/pending-approvals/pending-approvals.component';
// import { ToastrModule } from 'ngx-toastr';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgSelectModule } from '@ng-select/ng-select';
import { PendingApprovalsShowComponent } from 'src/app/pages/pending-approvals-show/pending-approvals-show.component';
import { Approval } from 'src/app/shared/models/approval';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSelectModule,
    NgSelectModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    DateAgoPipe,
    MapsComponent,
    SheetsComponent,
    SheetsShowComponent,
    PendingApprovalsComponent,
    PendingApprovalsShowComponent,
    
  ],
    providers: [AuthenticationService, Approval]
})

export class AdminLayoutModule {}
