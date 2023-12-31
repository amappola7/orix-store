import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = 'https://fakestoreapi.com/auth/login';
  private _loginStatus: boolean = false;
  get loginStatus(): boolean {
    return this._loginStatus;
  }
  set loginStatus(status: boolean) {
    this._loginStatus = status;
  }

  constructor(
    private _http: HttpClient
  ) { }

  login(userData: IUser): Observable<any> {
    return this._http.post<IUser>(this._url, userData)
    .pipe(
      tap(() => 'User logged succesfully'),
      catchError((error) => {
        console.log('Error in login user');
        return of(error)
      })
    )
  }

  getLoginStatus(): Observable<boolean> {
    this.loginStatus = !this.loginStatus;
    return of(this.loginStatus);
  }
}
