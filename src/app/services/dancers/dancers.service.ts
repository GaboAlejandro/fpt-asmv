import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DancersService {
  PHP_API_SERVER = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }

  getAppointments(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token
    });
    const body = new HttpParams()
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/appointments/index`, body,{ headers: headers});
  }

}
