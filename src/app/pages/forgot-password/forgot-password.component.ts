import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from 'src/app/shared/models/forgot_password';
import { ForgotPasswordService } from './forgot-password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  subscription: any;
  forgotPassword:any;
  

  constructor(private forgotPasswordService:ForgotPasswordService, private forgotPasswordData: ForgotPassword, private toaster:ToastrService) { }

  ngOnInit() {
    this.forgotPassword = this.forgotPasswordData.returnForgotPasswordData();
  }

  postForgotPassword(){
    this.subscription = this.forgotPasswordService.postForgotPassword(this.forgotPassword).subscribe(data => {
      if (data.status=="success")
      {
        this.toaster.success('Please check your email', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
      }
   },
    (err) => {
      if (err.status=="422")
      {
        this.toaster.error('Please enter a valid email', 'Error!',{
          positionClass: 'toast-bottom-left'
        });
      }
    }
  );
    
  }
}

