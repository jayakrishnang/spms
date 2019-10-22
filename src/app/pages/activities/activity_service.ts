
import { Injectable } from '@angular/core';
import { EndPoints } from 'src/app/shared/utils/end-points';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable()
export class ActivityService {

  constructor(private httpService: HttpService ) { 

  }
  getActivityList()
  {
    const url = EndPoints.BASE_URL + EndPoints.Activity;
    return this.httpService.get(url);
  }
  createActivity(data)
  {
    const url = EndPoints.BASE_URL + EndPoints.Activity;
    return this.httpService.post(url, data);
  }
  getProjectList()
  {
    const url = EndPoints.BASE_URL + EndPoints.Projects;
    return this.httpService.get(url);
  }
  updateActivity(id,data)
  {
    const url = EndPoints.BASE_URL + EndPoints.Activity + '/' + id;
    return this.httpService.patch(url,data);
  }
  deleteActivity(id){
    const url = EndPoints.BASE_URL + EndPoints.Activity + '/' + id;
    return this.httpService.delete(url);
  }
  getActivity(data){
    const url = EndPoints.BASE_URL + EndPoints.Activity;
    return this.httpService.getActivity(url, data);
  }
  createSheet(filterparams){
    const url = EndPoints.BASE_URL + EndPoints.Sheets;
    return this.httpService.post(url, filterparams);
  }
  getUpdate(id){
    const url = EndPoints.BASE_URL + EndPoints.Activity + '/' + id;
    return this.httpService.get(url);
  }
}
