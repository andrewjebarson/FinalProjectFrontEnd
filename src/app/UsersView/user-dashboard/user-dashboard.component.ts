import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import searchRequest from '../searchRequest';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
 
  req:any;
  page:string="view";
  bookReq:any;
  order:any;
  pnr:any;

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
      sessionStorage.clear();
        this.router.navigate(["/error"])
    }
  }
 
  goToBooking(e:any){
    console.log("In Dashboard")
    this.req=e;
    this.page="bookingview"
    console.log(this.page)
  }

  goToPassenger(e:any){
      this.bookReq=e;
      this.page="passengerdetails"
  }

  goToPreview(e:any){
    this.order=e;
    this.page="preview";
  }
  goBack(e:string){
    this.page=e;

  }

  goToPnrView(e:any){
    this.page="pnrView";
    this.pnr=e;

  }
  logout(){
    this.utilService.clear();
    this.router.navigate([""]);
    window.location.reload();

  }

  goToProfile(){
    this.page="profileDash";
  }


}


