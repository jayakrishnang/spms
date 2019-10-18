import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpService: HttpService) { }

  getUserProfile(){
    const url = EndPoints.BASE_URL + EndPoints.UserProfile
    return this.httpService.get(url);
  }

  getProjects(){
    const url = EndPoints.BASE_URL + EndPoints.Projects;
    return this.httpService.get(url);
  }

  patchUserUpdate(name, email, password, default_project, profile_image, id){
    const url = EndPoints.BASE_URL + EndPoints.UserUpdate + '/' + id
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('default_project', default_project)
    formData.append('profile_image', profile_image)
    return this.httpService.postFileUpload(url, formData);
    // return this.http.post(url, formData);
  }
}

