import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserProfileService } from 'src/app/pages/user-profile/user-profile.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  subscription: any;
  UserProfile: any[] = [];
  constructor(location: Location,  private element: ElementRef, private router: Router, private authenticationService: AuthenticationService, private userProfile: UserProfileService) {
    this.location = location;
  }

  ngOnInit() {
    this.loadUserProfile();
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logout()
  {
    console.log('logout')
    this.subscription = this.authenticationService.logout();
  }
  loadUserProfile(){
    this.subscription = this.userProfile.getUserProfile().subscribe(data => {
      this.UserProfile = data.data.user;
      console.log(this.UserProfile);
    })
    
  }

}
