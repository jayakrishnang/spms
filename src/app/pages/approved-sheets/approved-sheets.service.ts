import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class ApprovedSheetsService {

  constructor(private httpService:HttpService) { }
  getApprovedSheets(){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + EndPoints.ApprovedSheets;
    return this.httpService.get(url);
  }
}
