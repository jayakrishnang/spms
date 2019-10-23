import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/pages/activities/activity_service';
import { ActivityCreate } from 'src/app/shared/models/activity';
import { collectExternalReferences } from '@angular/compiler';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Filter } from 'src/app/shared/models/filter';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  Subscription: any;
  Activitylist: any[] = [];
  Projectlist: any[] = [];
  TotalCount: any;
  TotalHours: any;
  ActivityData: any;
  isAddnew: boolean;
  isFilter: boolean;
  confirmDelete: boolean;
  closeResult: string;
  modalOptions:NgbModalOptions;
  myDateValue: Date;
  filterdata: any;
  sheetCreate: boolean;
  sheetdata: any;
  updateActivity: any;
  updateData: any;
  p: number = 1;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
};

  constructor(private activityService: ActivityService, private activityCreate: ActivityCreate, private modalService: NgbModal, private toaster: ToastrService, private filter: Filter) { }

    
  open(content,id) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.onEdit(id);
  }  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.loadActivity();
    this.loadProjects();
    this.ActivityData = this.activityCreate.returnActivityPostData();
    this.filterdata = this.filter.returnFilterData();
    this.myDateValue = new Date();
  }
  onAddnew(){
    if(this.isAddnew == true)
    {
      this.isAddnew = false;
    }
    else{
      this.isAddnew = true;
    }
    }
  onFilter(){
      if(this.isFilter == true)
      {
        this.isFilter = false;
      }
      else
      {
        this.isFilter = true;
      }
    }
  onSheets(){
    if(this.sheetCreate == true)
    {
      this.sheetCreate = false;
    }
    else
    {
      this.sheetCreate = true;
    }
  }

  
  onSubmit(){
    this.isAddnew = false;
    var date = this.ActivityData.activity.date;
    this.ActivityData.activity.date = date.day.toString() + "-" + date.month.toString() + "-" + date.year.toString();
    this.Subscription = this.activityService.createActivity(this.ActivityData).subscribe(data => {
      if (data.status ='success'){
        this.toaster.success(' Activity Created', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
      }
    this.loadActivity();
  })
  } 
  onEdit(id){
    this.Subscription = this.activityService.getUpdate(id).subscribe(data => {
      this.updateData = data.data;
      console.log(this.updateData);
    })
  }

  onUpdate(id){
    this.Subscription = this.activityService.updateActivity(id,this.ActivityData).subscribe(data => {
      if (data.status ='success'){
        this.toaster.success('Activity Updated', 'Success!', {
          positionClass: 'toast-bottom-left'
        });
      }
      this.loadActivity();
    })
  }


  onDelete(id){
    this.confirmDelete = true;
    this.Subscription = this.activityService.deleteActivity(id).subscribe(data => {
      if (data.status ='success'){
      this.toaster.success('Deleted', 'Success!',{
        positionClass: 'toast-bottom-left'
      });
    }
    this.loadActivity();
    })

  }

  onStartDateChanged(event) {
    this.filterdata.start_date = event.formatted;
  }

  onEndDateChanged(event){
    this.filterdata.end_date = event.formatted;
  }
  onDateChanged(event){
    this.filterdata.date = event.formatted;
  }
  filterActivity(){
    this.Subscription = this.activityService.getActivity(this.filterdata).subscribe(data =>
      { 
        this.Activitylist = data.data;
        this.TotalCount = data.total_count;
        this.TotalHours = data.total_hours;
      })
  }

  loadActivity(){
    this.Subscription = this.activityService.getActivityList().subscribe(data => {
    this.Activitylist = data.data;
    this.TotalCount = data.total_count;
    this.TotalHours = data.total_hours;
     })
  }

  loadProjects(){
    this.Subscription = this.activityService.getProjectList().subscribe(data => {
    this.Projectlist = data.data.projects;
    })
  }

  onSheetCreate(){
    this.Subscription = this.activityService.createSheet(this.filterdata).subscribe(data => {
      if (data.status ='success'){
        this.toaster.success('Sheet Created', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
      }
      this.sheetCreate=false;      
    })
  }
}

