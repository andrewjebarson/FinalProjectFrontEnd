import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Orders from 'src/app/OrderClass/Orders';
import PassengerDetails from 'src/app/OrderClass/PassengerDetails';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {

  @Input()
  bookReq:any;

  @Output()
  goBack= new EventEmitter<string>();
  @Output()
  goToPreview= new EventEmitter<Orders>();

  order:any;
  passengerDetails:PassengerDetails[]=[];
 
  passengerName:string="";
  passengerAadhar:any;
  passengerAge:any;
  err:string="";
totalSeats:any;
  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
      sessionStorage.clear();
        this.router.navigate(["/error"])
    }
    this.totalSeats=this.bookReq.category.totalSeats;
  }


  add(){
    if(this.passengerName!="" && this.passengerAge!="" && this.passengerAadhar!=""){
    let p=new PassengerDetails(null,this.totalSeats,this.passengerName,this.passengerAge,this.passengerAadhar,this.totalSeats>1?"CNF":"WL");
    this.passengerDetails.push(p);
    this.passengerName="";
    this.passengerAadhar="";
    this.passengerAge="";
    this.totalSeats-=1;
    console.log(this.passengerDetails);}else{
      this.err="Please fill out the passenger details";    }

  }
  next(){
    if(this.passengerDetails.length>0){
    this.order=new Orders(null,this.bookReq.trainId,this.bookReq.train.trainName,
      0
      ,this.passengerDetails.length
    ,this.passengerDetails
    ,this.bookReq.train.schedules[0].fromStation
    ,this.bookReq.train.schedules[0].toStation
    ,(this.bookReq.train.basePrice+this.bookReq.category.categoryPrice)*this.passengerDetails.length
    ,"Pending",new Date()
    ,this.bookReq.schedule.departureDate,this.bookReq.category.categoryName);
    console.log(this.order);
    this.goToPreview.emit(this.order);}else{
      this.err="Please add atleast one passenger";
    }
  }
  back(){
    this.goBack.emit("bookingview");

  }



}


