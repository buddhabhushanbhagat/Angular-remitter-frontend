import { Component, OnInit } from '@angular/core';
import { RemitterServiceService } from '../remitter-service.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private Service: RemitterServiceService;
  
  constructor(Service1: RemitterServiceService) {
    this.Service = Service1;
  }
  ngOnInit(): void {
    // this.login();
   console.log(this.Service.getCustomerId()) 
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  
}
