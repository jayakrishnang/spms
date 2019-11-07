import { Component, OnInit } from '@angular/core';
import { ApprovedSheetsService } from './approved-sheets.service';

@Component({
  selector: 'app-approved-sheets',
  templateUrl: './approved-sheets.component.html',
  styleUrls: ['./approved-sheets.component.scss']
})
export class ApprovedSheetsComponent implements OnInit {

  subscription: any;
  ApprovedSheets:any[] =[];
  p: number = 1;

  constructor(private RejectedSheetsService: ApprovedSheetsService) { }

  ngOnInit() {
    this.loadApprovedSheets(); 
  }

  loadApprovedSheets(){
    this.subscription = this.RejectedSheetsService.getApprovedSheets().subscribe(data => {
      this.ApprovedSheets = data.data.Approvedsheets;
    })
}
}
