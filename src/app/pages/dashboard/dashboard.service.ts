import { Injectable } from '@angular/core';
import { EndPoints } from 'src/app/shared/utils/end-points';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService ) { 

  }
  getNotificationList()
  {
    const url = EndPoints.BASE_URL + EndPoints.Notifications;
    return this.httpService.get(url);
  }
}

