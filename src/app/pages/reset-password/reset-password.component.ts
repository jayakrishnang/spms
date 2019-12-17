import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from './reset-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from '../../shared/helpers/must-match.validator';




@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  submitted = false;
  password: any;
  token: any;

  constructor(private resetPasswordService:ResetPasswordService, private toaster: ToastrService, private formbuilder: FormBuilder, private route: ActivatedRoute,  private router:Router ) { }

  ngOnInit() {

    this.resetPassword = this.formbuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
get f() { return this.resetPassword.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetPassword.invalid) {
        return;
    }
    this.password = this.resetPassword.get('password').value;
    this.token = this.route.snapshot.queryParams.reset_password_token;
    console.log(this.password)
    console.log(this.token)
    this.resetPasswordService.patchResetPassword( this.password,this.token).subscribe(
      data=>{
        if (data.status == "success")
        {
          this.toaster.success('Password Updated!', 'Success!',{
            positionClass: 'toast-bottom-left'
          });
          this.router.navigate(['/'])
      }
     },
      (err) => console.log(err)
    );
  }
}
