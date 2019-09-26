import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndPoints } from '../utils/end-points'
import { Router } from '@angular/router';
​
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
​
    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
​
    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    public isAuthentciated(){
       var token= JSON.parse(localStorage.getItem('currentUser')).access_token
       if (token == null || token == undefined)
       {
           return false;
       }
       return true
    }
​
    login(data) {
        return this.http.post<any>(`${EndPoints.API_URL}${EndPoints.Login}`, data)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
                this.currentUserSubject.next(user);
                return user;
            }));
    }
​
    forgotPassword(data) {
        return this.http.post<any>(`${EndPoints.BASE_URL}${EndPoints.Forgot}`, data)
            .pipe(map(user => {
                console.log(user);
                return user;
            }));
    }
​
    resetPassword(data) {
        return this.http.patch<any>(`${EndPoints.BASE_URL}${EndPoints.Reset}`, data)
            .pipe(map(user => {
                console.log(user);
                return user;
            }));
    }
​
    logout() {
    console.log('logout inauth')
    var body = {
        "token": JSON.parse(localStorage.getItem('currentUser')).access_token
    }
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);

    //    return this.http.post<any>(`${EndPoints.API_URL}${EndPoints.Logout}`, body)
    //     .pipe(map(user => {
    //         console.log(user);
    //         localStorage.removeItem('currentUser');
    //         this.currentUserSubject.next(null);
    //         this.router.navigate(['/']);
    //     }));
       
    }
}