import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  getUsers() {

    let params = new HttpParams().append('page', '2');
    params = params.append('name', 'Félix Rebollo');

    return this.http.get('https://reqres.in/api/user', {
      params
    }).pipe(
      map( resp => resp['data'] ),
      );
    }


}
