import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUtilService } from 'src/app/admin-util.service';
import { Detail } from 'src/app/TrainClasses/Detail';
import { Schedule } from 'src/app/TrainClasses/Schedule';
import { Seat } from 'src/app/TrainClasses/Seat';
import { Station } from 'src/app/TrainClasses/Station';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-modifytrain',
  templateUrl: './modifytrain.component.html',
  styleUrls: ['./modifytrain.component.css']
})
export class ModifytrainComponent implements OnInit {
  flag:String="false";
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
  error:string="";
  res:string="";
  d:any;
  do:any;
  add:any;
  scheduleList:Schedule[]=[];
  stationList:Station[]=[];
  seatList:Seat[]=[];
  
  

  constructor(private utilService:UtilService,
              private adminutilService:AdminUtilService, 
              private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
            this.router.navigate(["/error"])
    }
  }

  checkId(){
    this.adminutilService.viewTrain(this.trainId).subscribe(
      {
        next:(data)=>{this.d=data;
         this.flag="true";  
         console.log(this.d);
         this.trainId="";
         console.log(this.flag);
        },
        error:(err)=>{
         this.error="Invalid train id"
        }
      }
    );
  }
updateDetail(){
    console.log(this.add);
    let d=new Detail(this.d.trainId,this.trainName,this.basePrice,this.scheduleList,this.stationList);
    this.adminutilService.modifyTrain(d).subscribe({
      error:()=>{
        this.error="error";
      },
      complete:()=>{
        this.res="Updated Successfully";
        this.trainId="";
        this.trainName="";
        this.basePrice="";
      }
    });
 
  }
  updateSchedule(){
    let sc=new Schedule(null,new Date(this.departureDate),new Date(this.arrivalDate),this.fromStation,this.toStation,this.journeyHours,this.seatList);
    this.scheduleList.push(sc);
    this.departureDate="";
    this.arrivalDate="";
    this.fromStation="";
    this.toStation="";
    this.journeyHours="";

  }
  updateStation(){
    let st=new Station(null,this.stationName,this.stopNo);
    this.stationList.push(st);
    this.stationName="";
    this.stopNo="";

  }
  updateCategory(){ 
    let se=new Seat(null,this.categoryName,this.categoryPrice,this.totalSeats);
    this.seatList.push(se);
    this.categoryName="";
    this.categoryPrice=""
    this.totalSeats="";
    
  }
  stationForm(e:any){
    this.add=e;
  }
  scheduleForm(e:any){
    this.add=e;
  }
  categoryForm(e:any){
    this.do=e;
  }
}
  
