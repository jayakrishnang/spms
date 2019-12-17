import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { SheetsComponent } from 'src/app/pages/sheets/sheets.component';
import { SheetsShowComponent } from 'src/app/pages/sheets-show/sheets-show.component';
import { PendingApprovalsComponent } from 'src/app/pages/pending-approvals/pending-approvals.component';
import { PendingApprovalsShowComponent } from 'src/app/pages/pending-approvals-show/pending-approvals-show.component';
import { ProjectComponent } from 'src/app/pages/project/project.component';
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
import { RejectedSheetsComponent } from 'src/app/pages/rejected-sheets/rejected-sheets.component';
import { ApprovedSheetsComponent } from 'src/app/pages/approved-sheets/approved-sheets.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'sheets',         component: SheetsComponent },
    { path: 'sheetcontent/:id',   component: SheetsShowComponent},
    { path: 'pendingapprovals',         component:PendingApprovalsComponent },
    { path: 'pendingapprovalshow/:id', component: PendingApprovalsShowComponent},
    { path: 'project',        component: ProjectComponent},
    { path: 'activities',     component: ActivitiesComponent},
    { path: 'rejected-sheets',   component:RejectedSheetsComponent},
    { path: 'approved-sheets',   component:ApprovedSheetsComponent}
];
