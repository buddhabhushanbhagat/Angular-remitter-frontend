import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  implements OnInit {

  isLoggedOut=false;
  private Service: RemitterServiceService;
  responses: any
  constructor(Service1: RemitterServiceService, private router: Router) {
    this.Service = Service1;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.clear()
    this.router.navigate([""]);
  }
  
}
