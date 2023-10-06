import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LogOutService} from 'src/app/services/auth/logout/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
userLoginOn: boolean=false;


constructor(private logout:LogOutService, private route:Router) { }

ngOnInit(): void {
this.checkAuthentication();
}

checkAuthentication(){
  const token = localStorage.getItem('token');
  if (token){
    this.userLoginOn=true;
  }
  else{
    this.userLoginOn=false;
  }
}

onLogout() {

  this.logout.logOut().subscribe(
    response => {
      console.log('Logout successful');
      // Realizar redirección aquí
    },
    error => {
      console.error('Logout failed:', error);
      // localStorage.removeItem('token');
      // this.route.navigateByUrl('/auth/login');
      // console.clear();
    }
  );
}

}

