import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

  constructor(private httpService: HttpService ) { 

   
  }
  getSheetsList()
  {
    const url = EndPoints.BASE_URL + EndPoints.Sheets;
    return this.httpService.get(url);
  }
}
