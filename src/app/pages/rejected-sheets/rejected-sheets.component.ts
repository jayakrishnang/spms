import { Component, OnInit } from '@angular/core';
import { RejectedSheetsService } from './rejected-sheets.service';

@Component({
  selector: 'app-rejected-sheets',
  templateUrl: './rejected-sheets.component.html',
  styleUrls: ['./rejected-sheets.component.scss']
})
export class RejectedSheetsComponent implements OnInit {

  subscription: any;
  RejectedSheets:any[] =[];
  p: number = 1;

  constructor(private RejectedSheetsService: RejectedSheetsService) { }

  ngOnInit() {
    this.loadRejectedSheets(); 
  }

  loadRejectedSheets(){
    this.subscription = this.RejectedSheetsService.getRejectedSheets().subscribe(data => {
      console.log(data);
      this.RejectedSheets = data.data.Rejectedsheets;
      console.log(this.RejectedSheets);
    })
}
}
