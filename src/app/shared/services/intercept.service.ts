import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
// import { DOMAIN_NAME } from '../shared/utilities/end-points';

@Injectable()

export class InterceptService implements HttpInterceptor {
	authToken: any;
	authorizationHeader: any;

	constructor(
		private router: Router,
	) {
		
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if(JSON.parse(localStorage.getItem('currentUser'))){
			this.authToken = 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).access_token;
		}else {
			this.authToken = '';
		}
		const fromPage = request.headers.has('Form-Data');
		console.log(fromPage)
		if (request.headers.has('Component-Page')) {
			console.log('entered component')
			request = request.clone({ url: request.url.replace('http://', 'https://'), setHeaders: { 'Content-Type': 'application/json' } });
			// request = request.clone({ url: request.url.replace('http://', 'https://') , setHeaders: { Accept: 'application/json', Authorization: this.authToken } });
		} else if(request.headers.has('Form-Data')) {
			console.log('entered form data')
			request = request.clone({ url: request.url.replace('http://', 'https://'), setHeaders: { Authorization: this.authToken} });
		}
		 else if(request.headers.has('Content-Type')) 
		 {	
			console.log('in application/json')
			request = request.clone({ url: request.url.replace('http://', 'https://'), setHeaders: { Authorization: this.authToken , 'Content-Type' :'application/json'} }); 
		 }
		else if(request.headers.has('Login-Type')){
			console.log('logout intercept')
			request = request.clone({ url: request.url.replace('http://', 'https://'), setHeaders: { 'Content-Type': 'application/json' } });
		}
		else {
			console.log('entered else')	
			request = request.clone({ url: request.url.replace('http://', 'https://'), setHeaders: { 'Content-Type': 'application/json' , Authorization: this.authToken , 'Accept' :'application/json'} });
			// request = request.clone({ url: request.url.replace('http://', 'http://'), setHeaders: { 'Content-Type': 'application/json', Authorization: this.authToken } });
		}

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					const strmsg = event.body;
				}
				return event;
			}),
			catchError((error: HttpErrorResponse) => {
				//let errmsg = error.error.message || error.statusText;
				if( error.status === 401 ) {
				
				}else{
	
				}
				
				return throwError(error);
			})
		);
	}
}