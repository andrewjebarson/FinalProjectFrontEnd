import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  orderList:any[]=[];


  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
    this.utilService.getUpcoming().subscribe({
      next:(data)=>{
        this.orderList=data;
        console.log(this.orderList)
      },
      error:()=>{}
    });
  }

}
