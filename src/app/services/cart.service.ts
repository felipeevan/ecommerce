import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
    constructor(private http: HttpClient) {}

    addItemToCart(userinfo: any){
        localStorage.setItem('user', JSON.stringify(userinfo))
        localStorage.setItem('logged', 'true')
    }

}