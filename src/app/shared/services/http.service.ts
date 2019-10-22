import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
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

    getActivity(url,data): Observable<any> {

    let params = new HttpParams();
    params = params.append('start_date', data.start_date);
    params = params.append('end_date', data.end_date);
    params = params.append('date', data.date);
    params = params.append('project_id', data.project_id);
    params = params.append('hours', data.hours);
    params = params.append('cutoff_hour', data.cutoff_hour);
    params = params.append('group', data.group);
    params = params.append('range', data.range)
        return this.http.get(url, {params: params});
    }
    post(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(body);
        return this.http.post(url, body);
    }
    put(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(url);
        console.log(body);
        return this.http.put(url, body);
    }
    patch(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        console.log(body);
        return this.http.patch(url, body);
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

    logout(url, dataarr): Observable<any> {
        const body = JSON.stringify(dataarr);
        let headers = new HttpHeaders({
            'Login-Type': 'application/json'
        });
        return this.http.post(url, body, {headers: headers});
    }

    postActivityCreate(url: string, fmd: FormData): Observable<any> {
        console.log('post file upload')
        let headers = new HttpHeaders({
            'Form-Data': 'application/json'
        });
    //    headers.set('Content-Type', 'multipart/form-data');
    //    headers.set('Accept', 'application/json');
        return this.http.post(url, fmd, {headers : headers});
    }

    patchActivity(url: string, fmd: FormData): Observable<any> {
        console.log('post file upload')
        let headers = new HttpHeaders({
            'Form-Data': 'application/json'
        });
    //    headers.set('Content-Type', 'multipart/form-data');
    //    headers.set('Accept', 'application/json');
        return this.http.patch(url, fmd, {headers : headers});
    }

​
    private handleError(error: any) {
            console.log(error);
            return error;
      }
}


