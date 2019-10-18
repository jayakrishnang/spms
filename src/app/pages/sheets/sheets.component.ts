import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { SheetsService } from './sheets.service';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {
  subscription: any;
  Sheetslist: any[] = [];
  p: number = 1;

  constructor(private sheetsService: SheetsService) { }

  ngOnInit() {
    this.loadSheets();

  }
  getColor(status) { 
    switch (status) {
      case 'Created':
        return 'bg-primary';
      case 'Pending':
        return 'bg-warning';
      case 'Approved':
        return 'bg-success';
      case 'Rejected':
        return 'bg-danger';
      case 'Processed':
        return 'bg-info';
    }
  }

  loadSheets(){
    this.subscription = this.sheetsService.getSheetsList().subscribe(data => {
      this.Sheetslist = data.data.sheets;
    })
}
}

