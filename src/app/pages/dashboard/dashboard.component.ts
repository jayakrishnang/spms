import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DashboardService } from 'src/app/pages/dashboard/dashboard.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: any;
  Notificationslist: any[] = [];
  private timer;
  temp:any;
  constructor(private dashboardService: DashboardService) {}
​
  ngOnInit() {
    this.loadNotifications();
    this.timer = timer(0, 10000);
    this.timer.subscribe((t) => this.loadNotifications());
  }
  ngOnDestroy() {
  }
 
  getColor(notification_type) { 
    switch (notification_type) {
      case 0:
        return 'blue';
      case 1:
        return 'green';
      case 2:
        return 'red';
      case 3:
        return 'yellow';
    }
  }

  getIcon(notification_type) { 
    switch (notification_type) {
      case 0:
        return "\uf09b";
      case 1:
        return "\uf00c";
      case 2:
        return "\uf06a";
      case 3:
        return "\uf253";
    }
  }
  loadNotifications(){
    this.subscription = this.dashboardService.getNotificationList().subscribe(data => {
      this.Notificationslist = data.data.Notifications;
    })
    
  }
}