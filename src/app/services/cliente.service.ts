import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ClienteService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpClient) { }

    registrarCliente(body: any): Observable<any>{
        let bodyString = "?";
        Object.keys(body).forEach(element => {
            bodyString+=element+"="+body[element].toString()+"&"
        });
        bodyString = bodyString.substring(0, bodyString.length-1)

        return this.http.get(`/smdecommerce/NovoCliente`+bodyString)
        .pipe(retry(1), catchError(this.handleError));
    }

    loginCliente(body: any): Observable<any>{
      // let bodyString = "?";
      // Object.keys(body).forEach(element => {
      //   bodyString+=element+"="+body[element].toString()+"&"
      // });
      return this.http.post(`/smdecommerce/LoginCliente`, body)
        .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: any) {
      let errorMessage = '';
      console.log(error.error.message!=null)
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } if (error.error!=null && error.error.mensagem!=null){
        errorMessage = error.error.mensagem;
      }
      else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
      }
      return throwError(() => {
        return errorMessage;
      });
    }

    

}
