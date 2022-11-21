import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output()
  logoutEvent = new EventEmitter<string>();
  

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
        this.router.navigate(["/error"])
    }

  }

  logout(){
    this.utilService.clear();
    this.logoutEvent.emit("login");
  }

  error(){
this.router.navigate(["/error"]);
  }




}
