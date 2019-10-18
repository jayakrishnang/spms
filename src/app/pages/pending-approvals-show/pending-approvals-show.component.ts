import { Component, OnInit } from '@angular/core';
import { PendingApprovalsShowService } from './pending-approvals-show.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-approvals-show',
  templateUrl: './pending-approvals-show.component.html',
  styleUrls: ['./pending-approvals-show.component.scss']
})
export class PendingApprovalsShowComponent implements OnInit {
  subscription: any;
  PendingSheetContent:any[] =[];
  id: any;
  sub: any;

  constructor(private pendingApprovalShowService: PendingApprovalsShowService, private route: ActivatedRoute, private toaster: ToastrService , private router:Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
    this.loadPendingSheetContent(this.id);
  }
  sheetApprove(){
    this.subscription = this.pendingApprovalShowService.postApprove(this.id).subscribe(data =>{
      if(data.status == 'success')
      {
        this.toaster.success('Approved', 'Success',{
          positionClass: 'toast-bottom-left'
        });
        this.router.navigate(["/pendingapprovals"])
      }
    })
  }

  sheetReject(){
    this.subscription = this.pendingApprovalShowService.postReject(this.id).subscribe(data =>{
      if (data.status == 'success')
      {
        this.toaster.success('Rejected', 'Success',{
          positionClass: 'toast-bottom-left'
        });
        this.router.navigate(["/pendingapprovals"])
      }
    })

  }
  loadPendingSheetContent(id){
    this.subscription = this.pendingApprovalShowService.getPendingSheetContent(id).subscribe(data => {
      this.PendingSheetContent = data.activities;

    })
  }
}
