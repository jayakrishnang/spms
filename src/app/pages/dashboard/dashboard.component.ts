import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DashboardService } from 'src/app/pages/dashboard/dashboard.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalOptions, ModalDismissReasons, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NotificationCreate } from 'src/app/shared/models/notificaton';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: any;
  Notificationslist: any[] = [];
  activitieslist: any[] = [];
  private timer;
  temp:any;
  containers = ["container1"];
  containerNumber = 1;
  childList: any[] = [];
  activityForm: FormGroup;
  project: number;
  activity: any;
  hours: any;
  date: any;
  id: any;
  updateActivityForm: FormGroup;
  childActivityForm : FormGroup;
  parent: any;
  projectsList: any[] = [];
  selectedIndex = -1;
  DefaultProject: any;
  modalOptions:NgbModalOptions;
  closeResult: string;
  notificationData: any;

  constructor(private dashboardService: DashboardService,private modalService: NgbModal, private formBuilder: FormBuilder, private toaster: ToastrService, private notificationCreate: NotificationCreate) {}
  open(content,project,activity,date,type) {
    if (type == 'GitHub' || type == 'GitLab')
      {
      this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      this.onEdit(project,activity, date);
    }
  }  

  onEdit(project, activity,date){
      var tempdate = new Date(date);
      console.log(tempdate);
      this.date = new NgbDate(tempdate.getFullYear(),tempdate.getMonth()+1,tempdate.getDate());
      this.notificationData.activity.date  = this.date;
      this.notificationData.activity.project_id = project;
      this.notificationData.activity.name = activity;
  }
  onCreate(id){
    var date = (<HTMLInputElement>document.getElementById('date')).value;
    this.notificationData.activity.date = date;
    this.subscription = this.dashboardService.createActivity(this.notificationData).subscribe(data=>{
      if(data.status == 'success'){
        this.toaster.success('Activity Created', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.modalService.dismissAll();
        var body ={
          "id":id
        }
        this.dashboardService.setRead(body).subscribe();
        this.ngOnInit();
      }
    },
    (error)=>{
        this.toaster.error('Please fill all fields!', 'Error!',{
          positionClass: 'toast-bottom-left'
        });
    })
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
​
  ngOnInit() {
    this.loadNotifications();
    this.timer = timer(0, 10000);
    this.timer.subscribe((t) => this.loadNotifications());
    this.loadActivities();
    this.loadProjects();
    this.activityForm = this.formBuilder.group({
      project: '',
      activity: '',
      hours: ''
    });
    this.updateActivityForm = this.formBuilder.group({
      project: '',
      activity: '',
      hours: ''
    });

    this.childActivityForm = this.formBuilder.group({
      project: '',
      activity: '',
      hours: ''
    });

    this.updateActivityForm.controls['project'].disable();
    this.updateActivityForm.controls['activity'].disable();
    this.updateActivityForm.controls['hours'].disable();
    this.loadUserProfile();
    this.notificationData = this.notificationCreate.returnActivityPostData();

  }
  ngOnDestroy() {
  }
 
  getColor(notification_type) { 
    switch (notification_type) {
      case 'GitHub':
        return 'blue';
      case 'Approved':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'Pending_approval':
        return 'yellow';
      case 'GitLab':
        return 'blue';
    }
  }

  getIcon(notification_type) { 
    switch (notification_type) {
      case 'GitHub':
        return "\uf09b";
      case 'Approved':
        return "\uf00c";
      case 'Rejected':
        return "\uf06a";
      case 'Pending_approval':
        return "\uf253";
      case 'GitLab':
        return "\uf296";
    }
  }
  loadNotifications(){
    this.subscription = this.dashboardService.getNotificationList().subscribe(data => {
      this.Notificationslist = data.data.Notifications;
    })
  }

  removeActivity(id){
    this.subscription = this.dashboardService.deleteActivity(id).subscribe(data => {
      if(data.status == 'success'){
        this.toaster.success('Activity Deleted', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.loadActivities();
      }
    })
  }

  addActivityField(i)
  {
    // this.containers.push("container"+this.containerNumber);
    this.activitieslist[i]['containers'].push(2)
  }

  addActivityFieldChild(i,j)
  {
    this.activitieslist[i].children[j]['containers'].push(2)
  }
  expandChild(i){
    var divparent = document.getElementById('parent'+i);
    if (divparent.style.display == "none"){
      divparent.style.display = "block";
      this.parent = "true";
    } 
    else
    {
      divparent.style.display = "none";
      this.parent = false;
    }
    var divchild = document.getElementById('child'+i)
    if (divchild.style.display == "none")
    {
      divchild.style.display = "block";
    }
    else
    {
      divchild.style.display = "none";
    }
  }

  updateActivity(date,id,i,j){
    var editbutton = document.getElementById('editbutton'+i+j);
    editbutton.style.display = "block";
    var savebutton = document.getElementById('savebutton'+i+j);
    savebutton.style.display = "none";
    this.project = this.updateActivityForm.get('project').value;
    this.activity = this.updateActivityForm.get('activity').value;
    this.hours = this.updateActivityForm.get('hours').value;
    this.date = date;
    this.id = id;
    this.subscription = this.dashboardService.updateActivity(this.project, this.activity, this.hours, this.date, this.id).subscribe(data=>{
    if(data.message == 'success'){
        this.toaster.success('Activity Updated', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.ngOnInit();
      }
    },
    (error)=>{
      this.toaster.error('Invalid attributes', 'Success!',{
        positionClass: 'toast-bottom-left'
      });
    })
    var projectfield = <HTMLInputElement> document.getElementById('input-project'+i+j);
    var activityfield = <HTMLInputElement> document.getElementById('input-activity'+i+j);
    var hoursfield = <HTMLInputElement> document.getElementById('input-hours'+i+j);
    projectfield.disabled = true;
    activityfield.disabled = true;
    hoursfield.disabled = true;
  }

  updateChild(date,id,i,k){
    var editbutton = document.getElementById('editbutton'+i+k);
    editbutton.style.display = "block";
    var savebutton = document.getElementById('savebutton'+i+k);
    savebutton.style.display = "none";
    this.project = this.childActivityForm.get('project').value;
    this.activity = this.childActivityForm.get('activity').value;
    this.hours = this.childActivityForm.get('hours').value;
    this.date = date;
    this.id = id;
    this.subscription = this.dashboardService.updateActivity(this.project, this.activity, this.hours, this.date, this.id).subscribe(data=>{
    console.log(data)
    if(data.message == 'success'){
        this.toaster.success('Activity Updated', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.ngOnInit();
      }
    },
    (error)=>{
      this.toaster.error('Invalid attributes', 'Error!',{
        positionClass: 'toast-bottom-left'
      });
    })
    var projectfield = <HTMLInputElement> document.getElementById('input-project'+i+k);
    var activityfield = <HTMLInputElement> document.getElementById('input-activity'+i+k);
    var hoursfield = <HTMLInputElement> document.getElementById('input-hours'+i+k);
    projectfield.disabled = true;
    activityfield.disabled = true;
    hoursfield.disabled = true;
  }


  createActivity(date){
    this.project = this.activityForm.get('project').value;
    this.activity = this.activityForm.get('activity').value;
    this.hours = this.activityForm.get('hours').value;
    this.date = date;
    this.subscription = this.dashboardService.postActivity(this.project, this.activity, this.hours, this.date).subscribe(data=>{
      if(data.status == 'success'){
        this.toaster.success('Activity Created', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.ngOnInit();
      }
    },
    (error)=>{
        this.toaster.error('Please fill all fields!', 'Error!',{
          positionClass: 'toast-bottom-left'
        });
    })
  }

  childActivityCreate(date){
    this.project = this.childActivityForm.get('project').value;
    this.activity = this.childActivityForm.get('activity').value;
    this.hours = this.childActivityForm.get('hours').value;
    this.date = date;
    this.subscription = this.dashboardService.postActivity(this.project, this.activity, this.hours, this.date).subscribe(data=>{
      if(data.status == 'success'){
        this.toaster.success('Activity Created', 'Success!',{
          positionClass: 'toast-bottom-left'
        });
        this.childActivityForm.reset();
        this.ngOnInit();
      }
    },
    (error)=>{
        this.toaster.error('Please fill all fields!', 'Error!',{
          positionClass: 'toast-bottom-left'
        });
    })
  }

  enableFields(i,j){
    var projectfield = <HTMLInputElement> document.getElementById('input-project'+i+j);
    var activityfield = <HTMLInputElement> document.getElementById('input-activity'+i+j);
    var hoursfield = <HTMLInputElement> document.getElementById('input-hours'+i+j);
    var editbutton = document.getElementById('editbutton'+i+j);
    editbutton.style.display = "none";
    var savebutton = document.getElementById('savebutton'+i+j);
    savebutton.style.display = "block";
    projectfield.disabled = false;
    activityfield.disabled = false;
    hoursfield.disabled = false;
  } 

  enableFieldsChild(i,k){
    var projectfield = <HTMLInputElement> document.getElementById('childproject'+i+k);
    var activityfield = <HTMLInputElement> document.getElementById('childactivity'+i+k);
    var hoursfield = <HTMLInputElement> document.getElementById('childhours'+i+k);
    var editbutton = document.getElementById('editbutton'+i+k);
    editbutton.style.display = "none";
    var savebutton = document.getElementById('savebutton'+i+k);
    savebutton.style.display = "block";
    projectfield.disabled = false;
    activityfield.disabled = false;
    hoursfield.disabled = false;
  } 

  loadProjects(){
    this.subscription = this.dashboardService.getProjects().subscribe(data=>{
      console.log(data.data.projects);
      this.projectsList = data.data.projects;
    })
  }

  loadUserProfile(){
    this.subscription = this.dashboardService.getUserProfile().subscribe(data => {
      this.DefaultProject = data.data.user.default_project;
      if (this.DefaultProject != null){
        this.childActivityForm.get('project').setValue(this.DefaultProject);
          this.activityForm.get('project').setValue(this.DefaultProject);
          this.childActivityForm.get('project').setValue(this.DefaultProject);
        }
    })
  }

  loadActivities(){
    this.subscription = this.dashboardService.getActivities().subscribe(data => {
      this.activitieslist = data.data;
      this.activitieslist.forEach((element,i) =>
      {
      this.activitieslist[i]['containers'] = ['1']
      if(this.activitieslist[i].group == 'parent'){
        this.activitieslist[i].children.forEach((element1,j) => {
          this.activitieslist[i].children[j]['containers'] = ['1'];
          this.childList = this.activitieslist[i].children[j];
        })
      }
      })
    })
  }
}