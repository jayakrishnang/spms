import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpService:HttpService) { }

  postForgotPassword(data){
    const url = EndPoints.BASE_URL + EndPoints.Forgot;
    return this.httpService.post(url,data);
  }
}
