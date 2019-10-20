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
}
