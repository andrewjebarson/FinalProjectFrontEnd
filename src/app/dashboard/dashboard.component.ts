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

  flag:boolean=true;
  

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(this.utilService.getUser().roles=="User"){
        this.flag=true;
    }else if(this.utilService.getUser().roles=="Admin"){
        this.flag=false;
    }

  }

  logout(s:String){
    this.utilService.clear();
    this.logoutEvent.emit("login");
  }

  error(){
this.router.navigate(["/error"]);
  }



  




}
