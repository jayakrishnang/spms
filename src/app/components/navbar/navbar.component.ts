import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserProfileService } from 'src/app/pages/user-profile/user-profile.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpService } from 'src/app/shared/services/http.service';
import { EndPoints } from 'src/app/shared/utils/end-points';

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
  UserProfile: any;
  name: any;
  profile_image: any;
  constructor(location: Location,  private element: ElementRef, private router: Router, private authenticationService: AuthenticationService, private httpservice: HttpService, private userProfile: UserProfileService) {
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
    const url = EndPoints.API_URL + EndPoints.Logout;
    const dataarr = {
      "token": JSON.parse(localStorage.getItem('currentUser')).access_token
    }
    this.subscription = this.httpservice.logout(url, dataarr).subscribe(data=>{
          localStorage.clear();
          this.router.navigate(['/']);
      }
    )
  }
  loadUserProfile(){
    this.subscription = this.userProfile.getUserProfile().subscribe(data => {
      this.UserProfile = data.data.user;
      console.log(this.UserProfile);
    })
    
  }

}
