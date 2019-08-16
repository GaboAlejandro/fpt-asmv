import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DancersService } from '../../services/dancers/dancers.service';
import { UserService } from '../../services/user/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css']
})
export class DancersComponent implements OnInit {
private data: any[];
private today = new Date();

  constructor(private dancersService: DancersService, private userService: UserService , private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    this.getData();

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
  logOut() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
