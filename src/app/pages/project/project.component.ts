import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  subscription: any;
  projectsList: any;
  projectCreateForm: FormGroup;
  projectname: any;
  aliases: any;
  logo: any;
  users: any;

  constructor(private projectservice: ProjectService, private formbuilder: FormBuilder, private toaster: ToastrService) { }

  ngOnInit() {
    this.loadProjects();
    this.projectCreateForm = this.formbuilder.group({
      projectname: [''],
      aliases: [''],
      logo: [''],
      users: ['']
    });
  }

  showAddProject(){
    var divadd = document.getElementById('add-project');
    if(divadd.style.display == 'none'){
      divadd.style.display = 'block';
    }
    else{
      divadd.style.display = 'none';
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.projectCreateForm.get('logo').setValue(file);
    }
  }
  loadProjects(){
    this.subscription = this.projectservice.getProjects().subscribe(data=>{
      this.projectsList = data.data.projects;
    })
  }

  onSubmit() {
    this.projectname = this.projectCreateForm.get('projectname').value;
    this.aliases = this.projectCreateForm.get('aliases').value;
    this.logo = this.projectCreateForm.get('logo').value;
    this.users = this.projectCreateForm.get('').value;
    this.projectservice.postCreateProject(this.projectname, this.aliases, this.logo, this.users ).subscribe(
      data=>{
        if (data.message == "success")
        {
          this.toaster.success('Profile Updated!', 'Success!',{
            positionClass: 'toast-bottom-left'
          });
        window.location.reload();
      } 
     },
      (err) => console.log(err)
    );
  }
}
