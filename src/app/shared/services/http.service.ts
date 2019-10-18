import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
​
@Injectable()
export class HttpService {
​
    public currentError: any;
​
    constructor(private http: HttpClient) {
​
    }
    get(url): Observable<any> {
        return this.http.get(url);
    }
    post(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(body);
        return this.http.post(url, body);
    }
    patch(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(body);
        return this.http.patch(url, body);
    }
    put(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(url);
        console.log(body);
        return this.http.put(url, body);
    }
    delete(url): Observable<any> {
        console.log(url);
        return this.http.delete(url);
    }
​
    postFileUpload(url: string, fmd: FormData): Observable<any> {
       const headers = new HttpHeaders();
       headers.append('Form-Data', 'UploadFile');
    //    headers.set('Content-Type', 'multipart/form-data');
    //    headers.set('Accept', 'application/json');
        return this.http.patch(url, fmd, {headers : headers});
    }

    postApproval(url, body): Observable<any> {
       let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });    //    headers.set('Content-Type', 'multipart/form-data');
    //    headers.set('Accept', 'application/json');
        return this.http.post(url, body, {headers : headers});
    }

    private handleError(error: any) {
            console.log(error);
            return error;
      }
}


