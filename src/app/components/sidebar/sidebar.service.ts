import { Injectable } from '@angular/core';
import { EndPoints } from 'src/app/shared/utils/end-points';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private httpService: HttpService) { }
  getUserProfile(){
    const url = EndPoints.BASE_URL + EndPoints.UserProfile
    return this.httpService.get(url);

  }
}
