import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { UserModel } from '../../interfaces/user.model';
import { AppointmentModel } from '../../interfaces/appointment.model';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  PHP_API_SERVER = 'https://safe-chamber-22294.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/auth/login`, body , { headers: headers});
  }

  createUsers(user: UserModel) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const body = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('password', user.password)
      .set('c_password', user.c_password)
    return this.httpClient.put(`${this.PHP_API_SERVER}/api/auth/register`, body, { headers: headers});
  }

  createAppointment(appointment: AppointmentModel, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token
    });
    const body = new HttpParams()
      .set('user_id', appointment.id.toString())
      .set('appointment', appointment.appointment);
    return this.httpClient.post(`${this.PHP_API_SERVER}/api/appointments/store`, body, { headers: headers});
  }
}
