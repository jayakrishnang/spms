import { Component, OnInit } from '@angular/core';
import { SheetsShowService } from './sheets-show.service';
import { ActivatedRoute } from '@angular/router'
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Approval } from 'src/app/shared/models/approval';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sheets-show',
  templateUrl: './sheets-show.component.html',
  styleUrls: ['./sheets-show.component.scss']
})
export class SheetsShowComponent implements OnInit {
  subscription: any;
  SheetContent :any[] = [];
  Managers: any[] =[];
  sub: any;
  id: any;
  user_roles: any[] =[];
  public items: string[] = [];
  approval: any;
  p: number = 1;

  constructor(private sheetsShowService:SheetsShowService, private route: ActivatedRoute, private Auth: AuthenticationService, private approvals: Approval, private toaster: ToastrService) { }

  ngOnInit() {
  this.approval = this.approvals.returnApprovalData();
  this.subscription = this.sheetsShowService.getUserProfile().subscribe(data=>{
    this.user_roles = data.data.user.role;
    console.log(this.user_roles)
  });
   this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
    this.loadSheetContent(this.id);
    this.loadManagerList();
  }

  showManagerList(){
    var managerdiv = document.getElementById('select-manager');
    if(managerdiv.style.display == 'none')
    {
      managerdiv.style.display = 'block';
    }
    else
    {
      managerdiv.style.display = 'none';
    }
  }

  sendApproval(){
    console.log(this.approval);
    this.subscription = this.sheetsShowService.postSendForApproval(this.id, this.approval).subscribe(data=>{
      if(data.status == 'success')
      {
        this.toaster.success('Send for Approval', 'Success',{
          positionClass: 'toast-bottom-left'
        });
      }
      if(data.status == 422)
      {
        this.toaster.error('Already send for approval', 'Error',{
          positionClass: 'toast-bottom-left'
        });
      }
    },
    (error) => {
      this.toaster.error('Already send for approval', 'Error',{
        positionClass: 'toast-bottom-left'
      });
    }
    )
  }
   
  loadSheetContent(id){
    this.subscription = this.sheetsShowService.getSheetContent(id).subscribe(data => {
      this.SheetContent = data.activities;
      console.log(this.SheetContent)
    })
  }
  loadManagerList(){
    this.subscription = this.sheetsShowService.getManagerList().subscribe(data =>{
      this.Managers = data.data.managers;
      console.log(this.Managers)
    })
  }

}
