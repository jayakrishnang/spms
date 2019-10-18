import { Component, OnInit } from '@angular/core';
import { PendingApprovalsService } from './pending-approvals.service';

@Component({
  selector: 'app-pending-approvals',
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.scss']
})
export class PendingApprovalsComponent implements OnInit {
  subscription: any;
  PendingApproval: any[] = [];
  p: number = 1;


  constructor(private pendingApprovalsService:PendingApprovalsService) { }

  ngOnInit() {
    this.loadPendingApprovals(); 
   }

  loadPendingApprovals(){
    this.subscription = this.pendingApprovalsService.getPendingApprovals().subscribe(data => {
      this.PendingApproval = data.data.approval;
      console.log(this.PendingApproval)
    })
}
}