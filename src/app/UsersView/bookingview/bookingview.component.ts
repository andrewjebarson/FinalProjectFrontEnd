
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from 'src/app/TrainClasses/Detail';
import { UtilService } from 'src/app/util.service';
import bookingRequest from '../bookingRequest';

@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.css']
})
export class BookingviewComponent implements OnInit {

  @Input()
  req:any;
  @Output()
  passengerEvent=new EventEmitter<bookingRequest>();
  
  trainList:any;
  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {

    console.log(this.req);


    this.utilService.getTrains(this.req.from,this.req.to,this.req.date).subscribe({
      next:(data)=>{
        this.trainList=data;
        console.log(this.trainList);
      }
    });
  
  }


  test(e:any){
    console.log(e);
  }

  book(d:any,sc:any,s:any){
    this.passengerEvent.emit(new bookingRequest(d.trainId,d,sc,s));
    
  }

  goBack(){
    this.router.navigate([""]);
    window.location.reload();

  }


}
