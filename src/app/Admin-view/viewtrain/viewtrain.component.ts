import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUtilService } from 'src/app/admin-util.service';
import { Schedule } from 'src/app/TrainClasses/Schedule';
import { Seat } from 'src/app/TrainClasses/Seat';
import { Station } from 'src/app/TrainClasses/Station';
import { Detail } from '../../TrainClasses/Detail';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-viewtrain',
  templateUrl: './viewtrain.component.html',
  styleUrls: ['./viewtrain.component.css']
})
export class ViewtrainComponent implements OnInit {
  flag:boolean=false;
  errors:string="";
  res:string="";
  trainId:any="";
  trainName:any="";
  basePrice:any="";
  departureDate:any="";
  arrivalDate:any="";
  fromStation:any="";
  toStation:any="";
  journeyHours:any="";
  stationName:any="";
  stopNo:any="";
  categoryName:any="";
  categoryPrice:any=""
  totalSeats:any="";
  scheduleList:Schedule[]=[];
  stationList:Station[]=[];
  seatList:Seat[]=[];
  add:any;
  do:any;
  d:any="";
  detail:any;

  constructor(private utilService:UtilService,
              private router:Router,
              private adminutilService:AdminUtilService) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      this.router.navigate(["/error"])
    }
    
  }
  checkId(){
     this.adminutilService.viewTrain(this.trainId).subscribe(
       {
         next:(data)=>{this.d=data;
          console.log(this.d);
          this.flag=true;  
          this.trainId="";},
          error:(err)=>{
          this.errors="Invalid train id"
         }
       }
     );
   }
   stationForm(e:any){
    this.add=e;
  }
  scheduleForm(e:any){
    this.add=e;
  }
}
