import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/User';
import { IUser } from '../../models/user/IUser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiUrl: string = '';
  
  constructor(private http: HttpClient) { }

  registerUser(newUser: User) : Observable<User> {
    newUser.id = '';
    return this.http.post<User>(this._apiUrl + 'api/User/register', newUser)
  }

  loginUser(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(this._apiUrl + 'api/user/login', {username, password});
  }

  logout(){
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }

  public isAuthenticated(): boolean {
    return false;
    // const token = localStorage.getItem('authToken');
    // const helper = new JwtHelperService()
    // const isExpired = helper.isTokenExpired(token);
    // return !isExpired;
  }
}
