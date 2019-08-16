import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppointmentModel} from '../../interfaces/appointment.model';
import { HttpService } from '../../services/http/http.service';
import {DatePipe} from '@angular/common';
import {formatDate } from '@angular/common';
import {DancersService} from '../../services/dancers/dancers.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [DatePipe]

})
export class AppointmentComponent implements OnInit {
  private today = new Date();
  private jstoday = '';
  private day: string;
  private hourv: string;
  private yes: string;
  private no: string;
  private msj = 'Select your date of death, please';
  private options: any = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6];
  private data: any[];


  appointment: AppointmentModel = {
    appointment: null
  };
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false,
    closeOnSelect: true,
  };

  constructor(private dancersService: DancersService, private httpService: HttpService, private userService: UserService , private httpClient: HttpClient, private router: Router, private datePipe: DatePipe) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '-4');
  }
    ngOnInit() {

      if (!this.userService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
      }
      this.dayShow();
    }
    getData() {
      this.dancersService.getAppointments(this.userService.getUserLoggedIn()[3]).subscribe(
        (res: any[]) => {
          this.data = res['data'];
        },
        error => {
        },
      );
    }
    dayShow() {
      this.day = 'visible';
      this.hourv = 'hidden';
      this.yes = 'hidden';
      this.no = 'hidden';

    }
    hourShow() {
      if (/^Sat/.test(this.date.toString()) || /^Sun/.test(this.date.toString())) {
        this.msj = 'you must select a day between Monday and Friday';
      } else {
        if (this.datePipe.transform(this.date, 'yyyy-MM-dd') < this.datePipe.transform(this.today, 'yyyy-MM-dd')) {
          this.msj = "You must choose today's date or higher";
        } else {
          this.msj = 'Now choose the hour of your dance.';
          this.day = 'hidden';
          this.hourv = 'visible';
        }
      }
    }
    buttonsShow(hour: string) {
      var h = hour;
      hour = hour.split(':')[0];

      if (+hour < 9) {
        if (+hour === 0) {
          hour = '24';
        }else{
          hour = (Number(hour) + 24).toString();
        }
      }

      if (+hour < this.today.getHours() ) {
        this.msj = "You must choose the time higher than the current one";
      } else {
        this.day = 'hidden';
        this.hourv = 'hidden';
        this.yes = 'visible';
        this.no = 'visible';
        this.msj = 'Get ready to dance, Mortal?';
      }
      hour = h;
    }
    createAppointment(date: string, hour: string) {
      const h = hour;
      hour = hour.split(':')[0];
      if (+hour < 9) {
        const d = date.split(' ');
        date = d[0] + ' ' + d[1] + ' ' + (Number(d[2]) + 1) + ' ' + d[3] + ' ' + d[4] + ' ' + d[5] + ' ' + d[6] + ' ' + d[7] + ' ' + d[8] + ' ' + d[9];
      }
      hour = h;
      this.appointment.id = this.userService.getUserLoggedIn()[0];
      this.appointment.appointment = this.datePipe.transform(date, 'yyyy-MM-dd') + hour;
      this.httpService.createAppointment(this.appointment, this.userService.getUserLoggedIn()[3]).subscribe(
        (res: any[]) => {
        },
        error => {
        },
      );
      this.router.navigateByUrl('/dancing');
    }
    logOut() {
      this.userService.logout();
      this.router.navigateByUrl('/login');
    }

}
