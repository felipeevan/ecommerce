import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    constructor(private http: HttpClient) {}

    saveCliente(userinfo: any){
      sessionStorage.setItem('user', JSON.stringify(userinfo))
      sessionStorage.setItem('logged', 'true')
    }

    saveAdmin(userinfo: any){
      sessionStorage.setItem('user', JSON.stringify(userinfo))
      sessionStorage.setItem('logged', 'true')
      sessionStorage.setItem('admin', 'true')
    }

    isLogged(): boolean{
      return sessionStorage.getItem('logged')==='true';
    }

    isAdmin(): boolean{
      return sessionStorage.getItem('admin')==='true';
    }

    deslogar(){
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('logged')
      sessionStorage.removeItem('admin')
      document.location.reload()
      this.http.get(`/smdecommerce/Logout`);
      
    }

    public setUserInfo(userinfo: any) {
      sessionStorage.setItem('user', JSON.stringify(userinfo))
    }
    
    public getUserInfo(){
      let userinfo: string | null = sessionStorage.getItem('user')

      if(userinfo==null){
        return null
      }
      return JSON.parse(userinfo)
    }

}