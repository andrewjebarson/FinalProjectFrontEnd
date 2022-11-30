import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-userpreview',
  templateUrl: './userpreview.component.html',
  styleUrls: ['./userpreview.component.css']
})
export class UserpreviewComponent implements OnInit {

@Input()
order:any;
@Input()
bookReq:any;



@Output()
goBack=new EventEmitter<string>();

email:any;
  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
    this.email=this.utilService.getUser().email;
  }

  next(){
    this.goBack.emit("payment");
  }
  back(){
    this.goBack.emit("passengerdetails");
  }


}
