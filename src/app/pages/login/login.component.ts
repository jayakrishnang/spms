import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/userlogin';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  userdata: any;
  subscription: Subscription;
  email: any;
  password: any;
  grant_type: any;
  constructor(private userlogin: UserLogin, private authenticationService: AuthenticationService, private route:Router, private toaster: ToastrService) {}

  ngOnInit() {
    this.userdata = this.userlogin.returnUserLoginPostData();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showError()
  {
    this.toaster.error('Invalid Email or Password!', 'Error!',{
      positionClass: 'toast-bottom-left'
    });
  }
  onSubmit()
  {
    
    this.subscription = this.authenticationService.login(this.userdata).subscribe(data=> {
      if (data.status_code == 200)
      {
        this.route.navigate(["/dashboard"])
      }
    },
    (error) => {
      this.showError();
    })
  }
}
