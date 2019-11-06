import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MyDatePickerModule } from 'mydatepicker';



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
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
// import { ToastrModule } from 'ngx-toastr';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgSelectModule } from '@ng-select/ng-select';
import { PendingApprovalsShowComponent } from 'src/app/pages/pending-approvals-show/pending-approvals-show.component';
import { Approval } from 'src/app/shared/models/approval';
import { ProjectComponent } from 'src/app/pages/project/project.component';
// import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DropdownListModule } from 'ngx-dropdown-list';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { RejectedSheetsComponent } from 'src/app/pages/rejected-sheets/rejected-sheets.component';
import { ApprovedSheetsComponent } from 'src/app/pages/approved-sheets/approved-sheets.component';
import { NotificationCreate } from 'src/app/shared/models/notificaton';
import { TagInputModule } from 'ngx-chips';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    NgxPaginationModule,
    NgxSelectModule,
    NgSelectModule,
    PerfectScrollbarModule,
    DropdownListModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(), 
    ClipboardModule,
    SelectDropDownModule,
    TagInputModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    ActivitiesComponent,
    IconsComponent,
    DateAgoPipe,
    MapsComponent,
    SheetsComponent,
    SheetsShowComponent,
    PendingApprovalsComponent,
    PendingApprovalsShowComponent,
    ProjectComponent,
    RejectedSheetsComponent,
    ApprovedSheetsComponent
    ],
    providers: [AuthenticationService, Approval,NotificationCreate,   
      {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }]
})


export class AdminLayoutModule {}
