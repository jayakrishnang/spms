import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SidebarService } from './sidebar.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/sheets', title: 'Sheets',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/pendingapprovals', title: 'Pending Approval',  icon:'ni-single-02 text-yellow', class: '' },

    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },

    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  subscription: any;
  user_roles: any[] = [];
  constructor(private router: Router, private auth: AuthenticationService, private sidebarservice: SidebarService) { }

  ngOnInit() {
    this.subscription = this.sidebarservice.getUserProfile().subscribe(data=>{
      this.user_roles = data.data.user.role;
    });
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
