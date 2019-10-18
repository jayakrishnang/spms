import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class SheetsShowService {

  constructor(private httpService: HttpService) { }
  
  getSheetContent(id){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + id + EndPoints.SheetContent;
    return this.httpService.get(url);
  }

  getUserProfile(){
    const url = EndPoints.BASE_URL + EndPoints.UserProfile
    return this.httpService.get(url);

  }

  getManagerList(){
    const url =EndPoints.BASE_URL + EndPoints.ManagerList;
    return this.httpService.get(url);

  }

  postSendForApproval(id,data){
    console.log(data);
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + id + '/' + EndPoints.SendForApproval
    return this.httpService.postApproval(url, data);
  }
}
