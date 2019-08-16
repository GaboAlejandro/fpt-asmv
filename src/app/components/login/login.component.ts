import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { UserService } from '../../services/user/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../interfaces/user.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private msj: string = ' ';

  user: UserModel = {
    email: null,
    password: null,
    c_password: null,
    name: null,
  };
  constructor(private httpService: HttpService, private userService: UserService , private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    $('button.change').click( function() {
      'use strict';
      if ($('div.register').css('display') === 'block') {
        $('div.register').css('display', 'none');
        $('div.login').css('display', 'block');
      } else {
        $('div.register').css('display', 'block');
        $('div.login').css('display', 'none');
      }
    });
  }

  logIn(email: string, password: string, event: Event) {
    event.preventDefault();
    this.httpService.login(email, password).subscribe(

      (res: any[]) => {
        this.userService.setUserLoggedIn(res['user']['id'], res['user']['email'], res['user']['name'], res['access_token']);
        this.router.navigateByUrl('/appointment');

        },
      error => {
        this.validateLogin();
      },
    );
  }

  validateLogin() {
    if (!this.userService.isLoggedIn()) {
      this.msj = 'Email or password invalid';
    }
  }

  Register(email: string, password: string, c_password: string, name: string, event: Event) {
    event.preventDefault();
    this.user.email = email;
    this.user.password = password;
    this.user.c_password = c_password;
    this.user.name = name;
    console.log(this.user);
    this.httpService.createUsers(this.user).subscribe(

      (res: any[]) => {
        this.msj = 'Welcome mortal!';
      },
      error => {
        this.msj = 'Something is wrong, please try again';
      },
    );
  }

}
