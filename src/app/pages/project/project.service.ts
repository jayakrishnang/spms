import { Injectable } from '@angular/core';
import { EndPoints } from 'src/app/shared/utils/end-points';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpService) { }

  getProjects(){
    const url = EndPoints.BASE_URL + EndPoints.Projects
    return this.http.get(url);
  }

  postCreateProject(projectname, aliases, logo, users){
    const url = EndPoints.BASE_URL + EndPoints.Projects
    const formData: FormData = new FormData();
    formData.append('project[name]', projectname);
    formData.append('project[logo]', logo);
    formData.append('project[aliases]', aliases);
    formData.append('project[users]', users )
    return this.http.postFileUpload(url, formData);
    // return this.http.post(url, formData);
  }
}
