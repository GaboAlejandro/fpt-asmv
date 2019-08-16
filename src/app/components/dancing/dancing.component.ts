import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-dancing',
  templateUrl: './dancing.component.html',
  styleUrls: ['./dancing.component.css']
})
export class DancingComponent implements OnInit {
private msj = 'I will be waiting for you';
  constructor(private userService: UserService, private httpService: HttpService , private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    setTimeout(() => {
      this.router.navigate(['dancers']);
    }, 5000);
  }

}
