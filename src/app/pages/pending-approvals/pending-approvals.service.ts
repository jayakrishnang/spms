import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class PendingApprovalsService {

  constructor(private httpService:HttpService) { }

  getPendingApprovals(){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + EndPoints.PendingApprovals;
    return this.httpService.get(url);
  }
}
