import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  subscription: any;
  UserProfile: any;
  uploadForm: FormGroup;
  profileimage: any;
  name: any;
  password: any;
  default_project: any;
  email: any;  
  user: any;
  ProjectsList: any[] = [];
  prefillUser: any;
  submitted = false;
  git_emails: any;

  constructor(private userprofileService: UserProfileService, private formbuilder: FormBuilder, private Auth: AuthenticationService, private toaster: ToastrService ) { }

  ngOnInit() {
    this.loadUserProfile();
    this.user = this.Auth.currentUserValue.result;
    console.log(this.user.result)
    this.uploadForm = this.formbuilder.group({
      profileimage: [''],
      name: '',
      email: '',
      password: [''],
      default_project: '',
      git_emails: ''
    });
    this.loadProjects();
  }

  loadUserProfile(){
    this.subscription = this.userprofileService.getUserProfile().subscribe(data => {
      this.UserProfile = data.data.user;
      this.prefillUser = data.data.user;
      this.uploadForm.get('name').setValue(this.prefillUser.name);
      this.uploadForm.get('email').setValue(this.prefillUser.email);
      this.uploadForm.get('default_project').setValue(this.prefillUser.default_project);
    })

    
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profileimage').setValue(file);
    }
  }

  loadProjects(){
    this.subscription = this.userprofileService.getProjects().subscribe(data =>{
      return this.ProjectsList = data.data.projects;
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.uploadForm.invalid) {
        return;
    }
    this.name = this.uploadForm.get('name').value;
    this.email = this.uploadForm.get('email').value;
    this.password = this.uploadForm.get('password').value;
    this.default_project = this.uploadForm.get('default_project').value;
    this.profileimage = this.uploadForm.get('profileimage').value;
    this.git_emails = this.uploadForm.get('git_emails').value;
    this.user = this.Auth.currentUserValue.result;
    this.userprofileService.patchUserUpdate(this.name, this.email, this.password, this.default_project, this.profileimage, this.user.id, this.git_emails).subscribe(
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

