import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpService:HttpService) { }

  patchResetPassword(password,token){
    const url = EndPoints.BASE_URL + EndPoints.Reset;
    const formData: FormData = new FormData();
    formData.append('password', password);
    formData.append('reset_password_token', token);
    return this.httpService.patchResetPassword(url,formData);

  }
}

