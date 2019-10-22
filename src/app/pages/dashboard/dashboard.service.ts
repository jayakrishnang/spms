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
  getActivities(){
    const url = EndPoints.BASE_URL + EndPoints.DashboardActivities;
    return this.httpService.get(url);
  }
  deleteActivity(id){
    const url = EndPoints.BASE_URL + EndPoints.Activity + '/' + id;
    return this.httpService.delete(url)
  }

  getProjects(){
    const url = EndPoints.BASE_URL + EndPoints.Projects;
    return this.httpService.get(url);
  }

  postActivity(project, activity, hours, date){
    const url = EndPoints.BASE_URL + EndPoints.Activity
    const formdata: FormData = new FormData();
    formdata.append("activity[project_id]", project);
    formdata.append("activity[name]", activity);
    formdata.append("activity[hours]", hours);
    formdata.append("activity[date]", date);
    return this.httpService.postActivityCreate(url, formdata);
  }

  updateActivity(project, activity, hours, date,id){
    const url = EndPoints.BASE_URL + EndPoints.Activity + '/' + id;
    const formdata: FormData = new FormData();
    formdata.append("activity[project_id]", project);
    formdata.append("activity[name]", activity);
    formdata.append("activity[hours]", hours);
    formdata.append("activity[date]", date);
    return this.httpService.patchActivity(url, formdata);
  }

  getUserProfile(){
    const url = EndPoints.BASE_URL + EndPoints.UserProfile
    return this.httpService.get(url);
  }
}

