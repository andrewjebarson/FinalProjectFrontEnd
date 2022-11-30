import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-trainpayment',
  templateUrl: './trainpayment.component.html',
  styleUrls: ['./trainpayment.component.css']
})
export class TrainpaymentComponent implements OnInit {

  @Input()
  order:any;
  value:string="";
  upiId:string="";
  ccNum:string="";
  ccDate:any;
  ccCvv:string='';
  err:string="";



  @Output()
  go= new EventEmitter<string>();

  


  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
      sessionStorage.clear();
        this.router.navigate(["/error"])
    }
    this.value="upi";
  }


  change(e:any){
    this.value=e.target.value;
    console.log(this.value);
  }


payCC(){
  console.log("PayCC");
  if(this.ccCvv.length==3 && this.ccNum.length==16){

  this.go.emit("success");}else{
    this.err="Please Enter valid values Id";
  }

}

payUpi(){
  console.log("PayUPI");


  if(this.upiId.match(new RegExp("[a-zA-Z0-9\\.\\-]{2,256}\\@[a-zA-Z][a-zA-Z]{2,64}"))){
  this.go.emit("success");}else{
    this.err="Please Enter valid UPI Id";
  }
} 


goBack(){
  this.go.emit("preview");

}
}

