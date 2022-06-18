import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AdminService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpClient) { }

    loginAdmin(body: any): Observable<any>{
      let bodyString = "?";
      Object.keys(body).forEach(element => {
        bodyString+=element+"="+body[element].toString()+"&"
      });
      bodyString = bodyString.substring(0, bodyString.length-1)
      return this.http.post(`/smdecommerce/LoginCliente`+bodyString, {})
        .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } if (error.error!=null && error.error.message!=null){
        errorMessage = error.error.message;
      }
      else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(() => {
        return errorMessage;
      });
    }
}
