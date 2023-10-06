import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { user } from 'src/app/services/auth/login/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userLoginOn:boolean=false;
  userData?: user;

  constructor(private loginService: LoginService, private router: Router) { }



  ngOnInit (): void {
    this.checkAuthentication();
  }

  checkAuthentication(){
    const token = localStorage.getItem('token');
    if (token){
      this.userLoginOn=true;
      this.userData={token:token};
    }
    else{
      this.userLoginOn=false;
      this.userData={token:''};
      this.router.navigateByUrl('/auth/login')
    }
  }

}
