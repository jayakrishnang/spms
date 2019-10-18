import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class PendingApprovalsShowService {
  body: any;
  constructor(private httpService: HttpService) { }

  getPendingSheetContent(id){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + id + EndPoints.SheetContent;
    return this.httpService.get(url);
  }
  postApprove(id){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + id + '/' + EndPoints.Approve;
    this.body;
    return this.httpService.post(url,this.body);
  }

  postReject(id){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + id + '/' + EndPoints.Reject;
    this.body;
    return this.httpService.post(url,this.body);

  }
}
