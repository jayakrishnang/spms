import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class RejectedSheetsService {

  constructor(private httpService:HttpService) { }
  getRejectedSheets(){
    const url = EndPoints.BASE_URL + EndPoints.Sheets + '/' + EndPoints.RejectedSheets;
    return this.httpService.get(url);
  }
}
