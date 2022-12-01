import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUtilService } from 'src/app/admin-util.service';
import { Detail } from 'src/app/TrainClasses/Detail';
import { Schedule } from 'src/app/TrainClasses/Schedule';
import { Seat } from 'src/app/TrainClasses/Seat';
import { Station } from 'src/app/TrainClasses/Station';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css'],
})
export class AddtrainComponent implements OnInit {
  flag: boolean = false;
  error: string = '';
  res: string = '';
  trainId: any = '';
  trainName: any = '';
  basePrice: any = '';
  departureDate: any = '';
  arrivalDate: any = '';
  fromStation: any = '';
  toStation: any = '';
  journeyHours: any = '';
  stationName: any = '';
  stopNo: any = '';
  categoryName: any = '';
  categoryPrice: any = '';
  totalSeats: any = '';
  scheduleList: Schedule[] = [];
  stationList: Station[] = [];
  seatList: Seat[] = [];
  add: any;
  do: any;

  constructor(
    private utilService: UtilService,
    private adminutilService: AdminUtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.utilService.check()) {
      console.log(this.utilService.check());
      sessionStorage.clear();
      this.router.navigate(['/error']);
    }
  }

  registerTrain() {
    this.add = '';
    this.do = '';
    let d = new Detail(
      this.trainId,
      this.trainName,
      this.basePrice,
      this.scheduleList,
      this.stationList
    );
    this.adminutilService.addTrain(d).subscribe({
      error: () => {
        this.error = 'error';
      },
      complete: () => {
        this.res = 'Updated Successfully';
        this.trainId = '';
        this.trainName = '';
        this.basePrice = '';
      },
    });
  }
  registerSchedule() {
    let d=new Date();
    if(new Date(this.departureDate).getTime()>d.getTime() && new Date(this.arrivalDate).getTime()>d.getTime()){
    let sc = new Schedule(
      null,
      new Date(this.departureDate).toISOString().replace('Z', '') + '+00:00',
      new Date(this.arrivalDate).toISOString().replace('Z', '') + '+00:00',
      this.fromStation,
      this.toStation,
      this.journeyHours,
      this.seatList
    );
    this.scheduleList.push(sc);
    this.seatList = [];
    this.departureDate = '';
    this.arrivalDate = '';
    this.fromStation = '';
    this.toStation = '';
    this.journeyHours = '';
    this.add = '';}else{
      this.error="Please Enter Correct Date";
    }
  }
  registerStation() {
    let st = new Station(null, this.stationName, this.stopNo);
    this.stationList.push(st);
    this.stationName = '';
    this.stopNo = '';
    this.add = '';
  }
  registerCategory() {
    if(this.categoryName=="General" || this.categoryName=="3AC" || this.categoryName=="2AC" || this.categoryName=="SL"){
    let se = new Seat(
      null,
      this.categoryName,
      this.categoryPrice,
      this.totalSeats
    );
    this.seatList.push(se);
    this.categoryName = '';
    this.categoryPrice = '';
    this.totalSeats = '';
    this.do = '';}
    else{
      this.error="Please Enter Correct Category Name";
    }
  }
  stationForm(e: any) {
    this.add = e;
  }
  scheduleForm(e: any) {
    this.add = e;
  }
  categoryForm(e: any) {
    this.do = e;
  }
}
