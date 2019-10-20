import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  subscription: any;
  projectsList: any;

  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }
  loadProjects(){
    this.subscription = this.projectservice.getProjects().subscribe(data=>{
      this.projectsList = data.data.projects;
    })
  }
}
