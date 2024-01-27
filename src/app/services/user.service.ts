import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { UserRegister } from '../models/user-register.model';
import { Observable, catchError, map, of, tap } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  create(formData: User) {
    return this.http.post(`${base_url}/auth/add-new-user`, formData);
  }

  login(formData: UserRegister) {
    return this.http.post(`${base_url}/auth/generate-token`, formData)
                    .pipe(
                      tap( (resp:any) => {
                        localStorage.setItem('token', resp.token);
                      })
                    );
    ;
  }

  validateToken() : Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/auth/renew-token`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
